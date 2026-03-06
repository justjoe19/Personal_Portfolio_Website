export default function Hero() {
  return (
    <section id="hero" className="relative h-[800px] flex items-center justify-center py-20 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Base Background */}
        <div className="absolute inset-0 bg-brand-bg"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        
        {/* Dynamic Mesh Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-blue/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-[100px]"></div>
        
        {/* Hero Image Overlay (Subtle) */}
        <div 
          className="absolute inset-0 bg-[url('/assets/hero.webp')] bg-cover bg-center opacity-10 mix-blend-luminosity lg:bg-fixed"
        ></div>
        
        {/* Bottom Fade to Content */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-bg to-transparent"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 py-1.5 px-4 rounded-full backdrop-blur-md mb-8 transition-all hover:bg-white/10 hover:border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green shadow-[0_0_8px_#7ee787]"></span>
          </span>
          <span className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-brand-text/80">Available for Michiana projects</span>
        </div>

        {/* Headline */}
        <div className="max-w-[1000px] px-4">
          <h1 className="text-[clamp(3rem,10vw,6rem)] font-black text-white leading-[0.95] mb-6 tracking-tight pb-2">
            Precision-engineered <br />
            <span className="text-brand-blue">websites</span>
          </h1>
          
          <p className="text-[clamp(1.1rem,2vw,1.25rem)] text-brand-dim max-w-[600px] mx-auto leading-relaxed mb-10 font-medium">
            Bridging the gap between high-level engineering and human-centric design for Michiana businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="group relative w-full max-w-[260px] sm:w-[260px] flex items-center justify-center bg-brand-blue text-brand-bg py-4 rounded-lg font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(121,192,255,0.3)] hover:shadow-[0_0_30px_rgba(121,192,255,0.5)] overflow-hidden"
            >
              <span className="relative z-10">Start a Project</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></div>
            </a>   

            <a 
              href="#portfolio" 
              className="group relative w-full max-w-[260px] sm:w-[260px] flex items-center justify-center bg-white/5 border border-white/10 text-white py-4 rounded-lg font-bold text-base transition-all duration-300 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] overflow-hidden"
            >
              <span className="relative z-10">View Recent Builds</span>
              <div className="absolute inset-0 bg-white/5 translate-y-full transition-transform group-hover:translate-y-0"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}