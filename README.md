# Michiana.dev | Precision Web Development & Software Engineering

Professional web development and software engineering for businesses in the Michiana area (South Bend, Mishawaka, Elkhart, and surrounding regions). This project is the official portfolio and service platform for **Michiana.dev**.

## 🚀 Overview

Michiana.dev provides high-performance, mobile-first web applications tailored for local businesses. The platform focuses on speed, SEO, and seamless user experiences using modern engineering standards.

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vite.dev/)
- **Styling:** Vanilla CSS (Custom properties, Flexbox/Grid)
- **Deployment:** [Netlify](https://www.netlify.com/)
- **Form Handling:** Netlify Forms with AJAX submission

## ✨ Key Features

- **Responsive Architecture:** Fully optimized for mobile, tablet, and desktop devices.
- **Local SEO Optimized:** Includes structured data (JSON-LD) and semantic HTML to improve search visibility in Northern Indiana and Southwest Michigan.
- **Performance Focused:** High-resolution assets delivered in modern formats (`.webp`) with optimized build configurations.
- **Secure Contact Flow:** Integrated Netlify Forms for reliable lead capture without a backend.
- **Modern UI Components:** Custom-built navigation, project carousels, and service displays.

## 📂 Project Structure

```text
├── public/              # Static assets (favicons, robots.txt, sitemap)
│   └── assets/          # Project images and brand logos
├── src/
│   ├── components/      # Modular React components
│   ├── App.jsx          # Main application layout and data
│   ├── index.css        # Global styles and layout architecture
│   └── main.jsx         # Application entry point
├── index.html           # Main template with SEO meta and Netlify form detection
├── netlify.toml         # Netlify deployment and redirect configuration
└── vite.config.js       # Vite build configuration
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

## 🌐 Deployment

This project is configured for automated deployment via Netlify. Each push to the `main` branch triggers a new build.

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

## 📄 License

This project is private and intended for the official Michiana.dev website.
