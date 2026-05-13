import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 max-w-[1200px] mx-auto px-6">
      <div className="flex items-center gap-3 mb-10">
        <span className="h-[1px] w-[35px] bg-brand-blue"></span>
        <h2 className="text-2xl font-bold text-white tracking-tight">The Engineer Behind Michiana.dev</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-x-16 gap-y-10 lg:gap-y-12 items-start text-center lg:text-left">
        {/* Row 1, Col 1: Photo */}
        <div className="relative group max-w-[280px] lg:max-w-[320px] mx-auto lg:mx-0 pt-2">
          {/* Subtle Glow behind photo */}
          <div className="absolute inset-0 bg-brand-blue/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-10 transition-transform duration-500 group-hover:scale-[1.02]">
             <img 
               src="/assets/photo.webp" 
               alt="Joe Hollenbach - Software Engineer in Mishawaka, IN" 
               className="w-full h-full object-cover"
               loading="lazy"
               width="320"
               height="320"
             />
          </div>
        </div>

        {/* Row 1, Col 2: Biography Text */}
        <div className="text-[1.15rem] leading-[1.8] font-medium text-brand-dim">
          <p>
            Local businesses shouldn't have to settle for slow, outdated templates that hide their value from potential customers.
          </p>
          <br />
          <p>
            Hi, I'm Joe Hollenbach, a software engineer specializing in high-performance web engineering and local SEO. With a B.S. in Software Engineering, I build digital assets for Northern Indiana and Southwest Michigan businesses that are optimized for speed, search visibility, and conversion.
          </p>
          <br />
          <p>
            I don't just "make websites"—I engineer high-performance tools that bridge the gap between complex software and clean, user-focused design, ensuring your business stands out where it matters most: at the top of the search results.
          </p>
        </div>


        {/* Row 2: Highlights and CTA (Centered below) */}
        <div className="lg:col-span-2 mt-8 lg:mt-12 pt-12 border-t border-white/5 flex flex-col items-center">
          <h3 className="text-white text-xl font-bold mb-8">The Competitive Advantage</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-12">
            {[
              "Technical SEO Engineering",
              "100/100 Core Web Vitals",
              "Local Michiana Market Expertise",
              "Conversion-Focused Architecture"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-brand-dim">
                <span className="text-brand-green font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a 
            href="#contact" 
            className="group relative w-full max-w-[260px] sm:w-[260px] flex items-center justify-center bg-brand-blue text-brand-bg py-4 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(121,192,255,0.2)] hover:shadow-[0_0_25px_rgba(121,192,255,0.4)] overflow-hidden"
          >
            <span className="relative z-10 text-center">Get a Free Performance Audit</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
