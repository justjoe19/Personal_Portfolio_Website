# Michiana.dev | Precision Web Development & Software Engineering

Professional web development and software engineering for businesses in the Michiana area (South Bend, Mishawaka, Elkhart, and surrounding regions). This repository is the official portfolio, service platform, and technical blog for **Michiana.dev**.

🔗 **Live site:** [michiana.dev](https://michiana.dev)

## 🚀 Overview

Michiana.dev is a high-performance, mobile-first marketing site built to showcase custom software and web engineering work. It combines a statically generated portfolio and technical blog with a live AI-powered demo tool, all deployed on Netlify.

## 🛠️ Tech Stack

- **Framework:** [Astro 6](https://astro.build/) (Static Site Generator)
- **UI Library:** [React 19](https://react.dev/) (hydrated as Astro Islands)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **CMS:** [Decap CMS](https://decapcms.org/) (headless, Git-based)
- **AI:** [Google Gemini](https://ai.google.dev/) via the `@google/generative-ai` SDK, served through a Netlify Function
- **Rate Limiting:** [Netlify Blobs](https://docs.netlify.com/blobs/overview/)
- **Deployment & Auth:** [Netlify](https://www.netlify.com/) & Netlify Identity
- **Form Handling:** Netlify Forms

## ✨ Key Features

- **Astro SSG:** Pre-rendered HTML for fast loads and strong SEO.
- **Integrated Blog:** Markdown content managed through Decap CMS, with breadcrumb and article structured data (JSON-LD).
- **AI Review Responder:** A free live demo at [`/review-responder`](https://michiana.dev/review-responder) that uses Google Gemini to draft polished, on-brand replies to customer reviews. Backed by a Netlify Function with per-IP daily rate limiting via Netlify Blobs.
- **Local SEO Optimized:** Structured data (JSON-LD), semantic HTML, automated sitemaps, and descriptive metadata across every page.
- **Secure Contact Flow:** Netlify Forms for reliable, spam-resistant lead capture.
- **Responsive, Modern UI:** Custom-built React components (Navbar, Project Carousel, Service Cards, Review Responder) styled with Tailwind CSS v4.

## 📂 Project Structure

```text
├── netlify/
│   └── functions/        # Netlify serverless functions (e.g. generate-response.js)
├── public/                # Static assets (favicons, robots.txt)
│   ├── admin/             # Decap CMS configuration and entry point
│   └── assets/            # Project images, brand logos, and blog media
├── src/
│   ├── components/        # Reusable React components
│   ├── content/           # Markdown-based blog posts
│   ├── content.config.ts  # Astro Content Layer configuration
│   ├── layouts/           # Astro layout templates
│   ├── pages/             # Astro file-based routing (Home, Blog, AI Review Responder)
│   └── index.css          # Global Tailwind v4 styles
├── astro.config.mjs       # Astro integration and build settings
├── netlify.toml           # Netlify build, functions, and redirect configuration
├── .env.example           # Required environment variables
└── package.json           # Project dependencies and scripts
```

## ⚙️ Local Development

### Prerequisites

- Node.js 18+ and npm
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) (`npm install -g netlify-cli`) — only required to run the AI Review Responder's serverless function locally

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/justjoe19/Personal_Portfolio_Website.git
   cd Personal_Portfolio_Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   Add your `GEMINI_API_KEY` to `.env` — get a free key at [aistudio.google.com](https://aistudio.google.com/). This powers the AI Review Responder at `/review-responder`. The key is already configured in the Netlify dashboard for production deploys, so no changes are needed there.

4. **Run the dev server:**
   ```bash
   npm run dev
   ```
   This serves the site at `http://localhost:4321`, but the AI Review Responder's serverless function will not be available — only the static page and form UI.

   To test the full tool locally, including the Netlify Function and rate limiting, run:
   ```bash
   netlify dev
   ```
   This proxies `netlify/functions/` alongside the Astro dev server at `http://localhost:8888`.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Astro dev server |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build locally |
| `netlify dev` | Run the full stack locally, including serverless functions |

## 🌐 CMS Administration

Blog content can be edited locally in `src/content/blog/` or through the web-based admin interface:

- **Admin URL:** `https://michiana.dev/admin/`
- **Authentication:** Netlify Identity (Git Gateway)

## ☁️ Deployment

The site deploys to Netlify on every push to `main`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Functions directory:** `netlify/functions`
- **Required environment variable:** `GEMINI_API_KEY` (set in the Netlify dashboard, not committed to source control)

## 📄 License

This project is private and proprietary. All rights reserved.
