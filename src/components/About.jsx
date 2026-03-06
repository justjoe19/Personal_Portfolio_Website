import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-6">
      <div className="flex items-center gap-3 mt-16 mb-10">
        <span className="h-[1px] w-[35px] bg-brand-blue"></span>
        <h2 className="text-2xl font-bold text-white tracking-tight">The Engineer Behind Michiana.dev</h2>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 my-16 text-center lg:text-left">
        {/* Profile Photo Section */}
        <div className="flex-1 max-w-[280px] lg:max-w-[320px] mx-auto lg:mx-0 relative group">
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

        {/* Biography Section */}
        <div className="flex-[2] text-[1.15rem] leading-[1.8] font-medium text-brand-dim">
          <p>
            "Hi, I’m Joe Hollenbach. With a Bachelor of Science in Software Engineering and a background in high-level technical support, I specialize in building high-performance web solutions for businesses in the Michiana area.
          </p>
          <br />
          <p>
            I bridge the gap between complex engineering and clean, user-friendly design. My goal is to ensure every project—whether a new build or a legacy migration—is not only technically superior but also a powerful tool for your business's growth."
          </p>
        </div>
      </div>
    </section>
  );
}