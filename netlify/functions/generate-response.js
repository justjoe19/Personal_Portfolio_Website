import { GoogleGenerativeAI } from '@google/generative-ai';
import { getStore } from '@netlify/blobs';

const DAILY_LIMIT = 5;
const BUSINESS_TYPES = new Set(['Restaurant', 'Salon/Spa', 'Contractor', 'Retail', 'Medical/Dental', 'Other']);
const TONES = new Set(['Professional', 'Friendly', 'Apologetic', 'Enthusiastic']);

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function getClientIp(req) {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return req.headers.get('x-nf-client-connection-ip') || 'unknown';
}

function getNextMidnightUTC() {
  const next = new Date();
  next.setUTCHours(24, 0, 0, 0);
  return next.getTime();
}

function buildPrompt({ review, businessName, businessType, tone, rating }) {
  return `You are an expert customer service writer helping the owner of "${businessName}", a ${businessType.toLowerCase()} business, respond to a customer review.

Customer review (${rating} out of 5 stars):
"""
${review}
"""

Write a reply to this review with the following requirements:
- Tone: ${tone}.
- If the review text contains the reviewer's name, address them by that name. Otherwise, use a warm generic greeting with no placeholder brackets.
- Acknowledge 1-2 specific details mentioned in the review.
- Keep the entire response under 150 words.
- Sound human, warm, and specific to this review — never generic or templated.
- End with a closing appropriate for a ${rating}-star review: for high ratings (4-5 stars), thank them and invite them back; for low ratings (1-3 stars), apologize sincerely and offer to make it right by inviting them to reach out directly.
- Do not use placeholder brackets like [Name] or [Business Name]. Do not include a subject line or signature block.
- Return only the response text, with no preamble or explanation.`;
}

export default async (req) => {
  if (req.method !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed' });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return jsonResponse(400, { error: 'Invalid JSON body.' });
  }

  const { review, businessName, businessType, tone, rating } = body || {};

  if (typeof review !== 'string' || !review.trim()) {
    return jsonResponse(400, { error: 'A review is required.' });
  }
  if (typeof businessName !== 'string' || !businessName.trim()) {
    return jsonResponse(400, { error: 'A business name is required.' });
  }
  if (!BUSINESS_TYPES.has(businessType)) {
    return jsonResponse(400, { error: 'Invalid business type.' });
  }
  if (!TONES.has(tone)) {
    return jsonResponse(400, { error: 'Invalid tone.' });
  }
  const ratingNum = Number(rating);
  if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    return jsonResponse(400, { error: 'Rating must be an integer between 1 and 5.' });
  }

  const ip = getClientIp(req);
  const store = getStore('review-responder-rate-limit');
  const key = `ip:${ip}`;
  const now = Date.now();

  const record = await store.get(key, { type: 'json' });

  if (!record || now >= record.resetAt) {
    await store.setJSON(key, { count: 1, resetAt: getNextMidnightUTC() });
  } else if (record.count >= DAILY_LIMIT) {
    return jsonResponse(429, { error: "You've reached the 5 free responses for today. Check back tomorrow!" });
  } else {
    await store.setJSON(key, { count: record.count + 1, resetAt: record.resetAt });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const prompt = buildPrompt({ review, businessName, businessType, tone, rating: ratingNum });
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    return jsonResponse(200, { response: text });
  } catch (err) {
    console.error('Gemini generation failed:', err);
    return jsonResponse(500, { error: 'Something went wrong generating the response. Please try again.' });
  }
};
