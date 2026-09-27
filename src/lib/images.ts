// Responsive variants: every image listed here also exists as `<name>-800.webp`
// (generated with `magick <file> -resize 800x -quality 80 <name>-800.webp`).
const widths: Record<string, number> = {
  '/assets/work/jhclaims.webp': 1600,
  '/assets/work/tristorm.webp': 1600,
  '/assets/work/rankradius.webp': 1600,
  '/assets/work/review-responder.webp': 1600,
  '/assets/183028.webp': 1024,
  '/assets/blg.webp': 1024,
  '/assets/gemini_generated_image_2xp3hk2xp3hk2xp3-2.webp': 2816,
  '/assets/gemini_generated_image_y0k4r3y0k4r3y0k4.webp': 1200,
  '/assets/img_1236.webp': 1376,
  '/assets/img_1349.webp': 1376,
};

/** `srcset` for an image with an 800px variant, or undefined if it has none. */
export function srcsetFor(src: string): string | undefined {
  const w = widths[src];
  return w ? `${src.replace(/\.webp$/, '-800.webp')} 800w, ${src} ${w}w` : undefined;
}
