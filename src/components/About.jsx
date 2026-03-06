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
            Businesses today need fast, professional websites that convert visitors into customers.
          </p>
          <br />
          <p>
            Hi, I'm Joe Hollenbach, a software engineer with a Bachelor of Science in Software Engineering and a background in high-level technical support. I build high-performance websites for businesses in the Michiana area.
          </p>
          <br />
          <p>
            I bridge the gap between powerful engineering and clean, user-friendly design. My goal is to create websites that are not only technically solid but also effective tools that help your business grow.
          </p>
        </div>


        {/* Row 2, Col 1: Highlights (Aligned under Photo) */}
        <div className="pt-2 border-t lg:border-none border-white/5">
          <h3 className="text-white text-xl font-bold mb-6">Why Work With Me</h3>
          <ul className="grid grid-cols-1 gap-4">
            {[
              "Software Engineering Degree",
              "Custom-built websites",
              "Local Michiana developer",
              "SEO-ready websites"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-brand-dim">
                <span className="text-brand-green font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2, Col 2: CTA Button (Aligned under Bio) */}
        <div className="flex justify-center">
          <a 
            href="#contact" 
            className="group relative w-full max-w-[260px] sm:w-[260px] flex items-center justify-center bg-brand-blue text-brand-bg py-4 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(121,192,255,0.2)] hover:shadow-[0_0_25px_rgba(121,192,255,0.4)] overflow-hidden"
          >
            <span className="relative z-10 text-center">Get a Free Consultation</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
