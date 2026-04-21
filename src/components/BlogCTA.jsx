import React from 'react';

export default function BlogCTA() {
  return (
    <section className="py-20 mt-20 border-t border-brand-border">
      <div className="glass-card p-10 md:p-16 rounded-3xl text-center relative overflow-hidden">
        {/* Background Accent Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/10 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px]"></div>

        <div className="relative z-10 max-w-[600px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to modernize your digital presence?
          </h2>
          <p className="text-brand-dim text-lg mb-10 leading-relaxed">
            I specialize in high-performance web engineering for local businesses in Northern Indiana and Southwest Michigan. Let's discuss your next project.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="/#contact" 
              className="group relative w-full max-w-[280px] flex items-center justify-center bg-brand-blue text-brand-bg py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(121,192,255,0.3)] hover:shadow-[0_0_30px_rgba(121,192,255,0.5)] overflow-hidden"
            >
              <span className="relative z-10">Start a Conversation</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
