import React, { useState, useEffect, useCallback } from 'react';

export default function ProjectCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  }, [projects.length]);

  // Optional: Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (!projects || projects.length === 0) return null;

  return (
    <div className="relative w-full max-w-[900px] mx-auto overflow-hidden rounded-2xl glass-card shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(121,192,255,0.05)]">
      <div className="flex transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`min-w-full box-border transition-all duration-[800ms] ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`}
          >
            <div className="flex flex-col">
              <div className="relative w-full aspect-video overflow-hidden border-b border-brand-border group">
                <img 
                  src={project.image} 
                  alt={`${project.name} - Web Development Project by Michiana.dev`} 
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-[1.03]" 
                  loading="lazy"
                  width="900"
                  height="506"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-brand-bg/40 flex items-center justify-center transition-opacity duration-[400ms]">
                  <a href={project.link} className="bg-brand-blue text-[#000] py-3 px-6 rounded font-bold text-sm transition-all duration-300 hover:bg-white hover:-translate-y-[2px] hover:shadow-[0_5px_15px_rgba(121,192,255,0.2)]" target="_blank" rel="noopener noreferrer">
                    View Website
                  </a>
                </div>
              </div>
              <div className={`p-8 lg:p-10 transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${index === currentIndex ? 'translate-x-0' : 'translate-x-5'}`}>
                <div className="flex flex-col gap-2">
                  <span className="font-main text-[0.75rem] text-brand-blue mb-1 block">{project.tech}</span>
                  <h3 className="text-[2rem] text-white mb-2 font-main tracking-tight">{project.name}</h3>
                  <p className="text-brand-dim text-[1.05rem] max-w-[800px]">{project.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="absolute top-[40%] left-0 -translate-y-1/2 bg-brand-card border border-brand-border text-white p-[1.2rem] cursor-pointer z-10 rounded-none w-[60px] h-[60px] flex items-center justify-center transition-all duration-200 hover:bg-brand-blue hover:text-brand-bg hover:border-brand-blue hover:shadow-[0_0_15px_rgba(121,192,255,0.3)] md:top-1/2" onClick={prevSlide} aria-label="Previous Slide">
        &#10094;
      </button>
      <button className="absolute top-[40%] right-0 -translate-y-1/2 bg-brand-card border border-brand-border text-white p-[1.2rem] cursor-pointer z-10 rounded-none w-[60px] h-[60px] flex items-center justify-center transition-all duration-200 hover:bg-brand-blue hover:text-brand-bg hover:border-brand-blue hover:shadow-[0_0_15px_rgba(121,192,255,0.3)] md:top-1/2" onClick={nextSlide} aria-label="Next Slide">
        &#10095;
      </button>

      <div className="absolute bottom-[25px] left-1/2 -translate-x-1/2 flex gap-3">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`h-[3px] rounded-none cursor-pointer transition-all duration-300 ${index === currentIndex ? 'bg-brand-blue w-[30px]' : 'bg-white/20 w-[12px]'}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
