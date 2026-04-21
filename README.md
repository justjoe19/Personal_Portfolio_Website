# Michiana.dev | Precision Web Development & Software Engineering

Professional web development and software engineering for businesses in the Michiana area (South Bend, Mishawaka, Elkhart, and surrounding regions). This project is the official portfolio, service platform, and technical blog for **Michiana.dev**.

## 🚀 Overview

Michiana.dev provides high-performance, mobile-first web applications tailored for local businesses. The platform focuses on speed, SEO, and seamless user experiences using modern engineering standards. It now features an integrated blog managed via a headless CMS to drive local search authority.

## 🛠️ Tech Stack

- **Framework:** [Astro 6](https://astro.build/) (Static Site Generator)
- **UI Library:** [React 19](https://react.dev/) (Hydrated as Astro Islands)
- **CMS:** [Decap CMS](https://decapcms.org/) (Headless, Git-based)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Deployment & Auth:** [Netlify](https://www.netlify.com/) & Netlify Identity
- **Form Handling:** Netlify Forms

## ✨ Key Features

- **Astro SSG:** Pre-rendered HTML for lightning-fast loads and maximum SEO ranking.
- **Integrated Blog:** Dynamic content managed through Markdown and Decap CMS.
- **Responsive Architecture:** Fully optimized for mobile, tablet, and desktop devices.
- **Local SEO Optimized:** Includes structured data (JSON-LD), semantic HTML, and automated sitemaps.
- **Secure Contact Flow:** Integrated Netlify Forms for reliable lead capture.
- **Modern UI Components:** Custom-built React components (Navbar, Project Carousel, Service Cards).

## 📂 Project Structure

```text
├── public/              # Static assets (favicons, robots.txt)
│   ├── admin/           # Decap CMS configuration and entry point
│   └── assets/          # Project images, brand logos, and blog media
├── src/
│   ├── components/      # Modular React components
│   ├── content/         # Markdown-based blog posts
│   ├── layouts/         # Astro layout templates
│   ├── pages/           # Astro file-based routing (Home & Blog)
│   ├── content.config.ts# Astro Content Layer configuration
│   └── index.css        # Global Tailwind v4 styles
├── astro.config.mjs     # Astro integration and build settings
├── netlify.toml         # Netlify deployment configuration
└── package.json         # Project dependencies and scripts
```

## ⚙️ Local Development

To get started with local development:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/justjoe19/Personal_Portfolio_Website.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🌐 CMS Administration

The blog content can be managed locally by editing files in `src/content/blog/` or via the web interface:

- **Admin URL:** `https://michiana.dev/admin/`
- **Authentication:** Netlify Identity (Git Gateway)

## 📄 License

This project is private and intended for the official Michiana.dev website.
