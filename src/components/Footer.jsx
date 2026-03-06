import React from 'react';

export default function Footer() {
  return (
    <footer className="py-[60px] pb-[30px] bg-brand-bg border-t border-brand-border w-full">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-4">
          <div className="font-main font-bold text-lg text-white mb-4 flex justify-center">MICHIANA<span className="text-brand-blue">.DEV</span></div>
          <p className="text-brand-dim text-[0.95rem] max-w-[400px]">Precision-engineered web solutions for local businesses.</p>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-brand-border text-center font-main text-[0.8rem] text-brand-dim">
        <div className="max-w-[1200px] mx-auto px-6">
          <p>© {new Date().getFullYear()} Joe Hollenbach | Software Engineer</p>
        </div>
      </div>
    </footer>
  );
}