export default function Footer() {
  return (
    <footer className="py-[60px] pb-[30px] bg-brand-bg border-t border-brand-border w-full">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-6">
          <div className="font-main font-bold text-lg text-white mb-4 flex items-center justify-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#161b22] border border-brand-border flex items-center justify-center p-1 shadow-sm">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" aria-hidden="true">
                <polygon points="42.5,23 55,23 36.5,77 24,77" fill="#79c0ff" />
                <polygon points="63.5,23 76,23 57.5,77 45,77" fill="#7ee787" />
              </svg>
            </div>
            <span>MICHIANA<span className="text-brand-blue">.DEV</span></span>
          </div>
          <p className="text-brand-dim text-[0.95rem] max-w-[400px]">Building software that performs, ranks, and grows with your business.</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <a href="/#portfolio" className="text-brand-dim text-sm hover:text-brand-blue transition-colors duration-200">Projects</a>
          <a href="/#services" className="text-brand-dim text-sm hover:text-brand-blue transition-colors duration-200">Services</a>
          <a href="/#about" className="text-brand-dim text-sm hover:text-brand-blue transition-colors duration-200">About</a>
          <a href="/blog" className="text-brand-dim text-sm hover:text-brand-blue transition-colors duration-200">Blog</a>
          <a href="/#contact" className="text-brand-dim text-sm hover:text-brand-blue transition-colors duration-200">Contact</a>
        </nav>
      </div>

      <div className="mt-12 pt-8 border-t border-brand-border text-center font-main text-[0.8rem] text-brand-dim">
        <div className="max-w-[1200px] mx-auto px-6">
          <p>© {new Date().getFullYear()} Michiana Dev LLC</p>
        </div>
      </div>
    </footer>
  );
}
