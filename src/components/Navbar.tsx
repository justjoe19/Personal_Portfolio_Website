import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isBlogPage, setIsBlogPage] = useState(false);
  const [isToolPage, setIsToolPage] = useState(false);

  useEffect(() => {
    // Check if we are on a blog page
    const path = window.location.pathname;
    const isBlog = path.startsWith('/blog');
    const isTool = path.startsWith('/review-responder');
    // window.location isn't available during Astro's SSR pass, so this route
    // check can only run post-hydration, not during the initial render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsBlogPage(isBlog);
    setIsToolPage(isTool);

    // Only track sections if we are on the homepage
    if (!isBlog && !isTool) {
      const sections = document.querySelectorAll('section[id]');

      const options: IntersectionObserverInit = {
        root: null,
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);

      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }
  }, []);

  // Helper function to handle link clicks (close mobile menu)
  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-brand-bg/95 backdrop-blur-md border-b border-brand-border z-[2000] py-3">
      <nav className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <a href="/#hero" className="flex items-center gap-2.5 font-main font-bold text-lg text-white hover:opacity-90 transition-opacity group">
          <div className="w-7 h-7 rounded-lg bg-[#161b22] border border-brand-border flex items-center justify-center p-1 shadow-sm group-hover:border-brand-blue/50 transition-colors">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full" aria-hidden="true">
              <polygon points="42.5,23 55,23 36.5,77 24,77" fill="#79c0ff" />
              <polygon points="63.5,23 76,23 57.5,77 45,77" fill="#7ee787" />
            </svg>
          </div>
          <span>MICHIANA<span className="text-brand-blue">.DEV</span></span>
        </a>

        {/* Hamburger Menu Toggle */}
        <button
          className="flex flex-col gap-[6px] bg-transparent border-none cursor-pointer z-[3000] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <span className={`w-[25px] h-[2px] bg-white transition-all duration-300 ${isOpen ? 'translate-y-[8px] rotate-45' : ''}`}></span>
          <span className={`w-[25px] h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-[25px] h-[2px] bg-white transition-all duration-300 ${isOpen ? '-translate-y-[8px] -rotate-45' : ''}`}></span>
        </button>

        {/* Navigation Links */}
        <ul className={`
          fixed top-full left-0 w-full bg-brand-card/98 backdrop-blur-xl flex flex-col items-center gap-0 overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] md:static md:w-auto md:bg-transparent md:backdrop-blur-none md:flex-row md:gap-8 md:overflow-visible md:h-auto
          ${isOpen ? 'h-auto py-4 border-b border-brand-border' : 'h-0 md:h-auto md:py-0'}
        `}>
          <li className={`w-full text-center transition-all duration-300 md:opacity-100 md:translate-y-0 ${isOpen ? 'opacity-100 translate-y-0 delay-[100ms]' : 'opacity-0 -translate-y-[10px] md:translate-y-0'}`}>
            <a
              href="/#hero"
              className={`block py-[0.6rem] px-4 text-[0.85rem] font-medium transition-all duration-300 md:inline md:p-0 ${!isBlogPage && !isToolPage && activeSection === 'hero' ? 'text-brand-blue underline underline-offset-4' : 'text-brand-dim hover:text-brand-blue hover:underline hover:underline-offset-4'}`}
              onClick={handleNavLinkClick}
            >
              Home
            </a>
          </li>
          <li className={`w-full text-center transition-all duration-300 md:opacity-100 md:translate-y-0 ${isOpen ? 'opacity-100 translate-y-0 delay-[150ms]' : 'opacity-0 -translate-y-[10px] md:translate-y-0'}`}>
            <a
              href="/#services"
              className={`block py-[0.6rem] px-4 text-[0.85rem] font-medium transition-all duration-300 md:inline md:p-0 ${!isBlogPage && !isToolPage && activeSection === 'services' ? 'text-brand-blue underline underline-offset-4' : 'text-brand-dim hover:text-brand-blue hover:underline hover:underline-offset-4'}`}
              onClick={handleNavLinkClick}
            >
              Services
            </a>
          </li>
          <li className={`w-full text-center transition-all duration-300 md:opacity-100 md:translate-y-0 ${isOpen ? 'opacity-100 translate-y-0 delay-[200ms]' : 'opacity-0 -translate-y-[10px] md:translate-y-0'}`}>
            <a
              href="/#portfolio"
              className={`block py-[0.6rem] px-4 text-[0.85rem] font-medium transition-all duration-300 md:inline md:p-0 ${!isBlogPage && !isToolPage && activeSection === 'portfolio' ? 'text-brand-blue underline underline-offset-4' : 'text-brand-dim hover:text-brand-blue hover:underline hover:underline-offset-4'}`}
              onClick={handleNavLinkClick}
            >
              Projects
            </a>
          </li>
          <li className={`w-full text-center transition-all duration-300 md:opacity-100 md:translate-y-0 ${isOpen ? 'opacity-100 translate-y-0 delay-[250ms]' : 'opacity-0 -translate-y-[10px] md:translate-y-0'}`}>
            <a
              href="/#about"
              className={`block py-[0.6rem] px-4 text-[0.85rem] font-medium transition-all duration-300 md:inline md:p-0 ${!isBlogPage && !isToolPage && activeSection === 'about' ? 'text-brand-blue underline underline-offset-4' : 'text-brand-dim hover:text-brand-blue hover:underline hover:underline-offset-4'}`}
              onClick={handleNavLinkClick}
            >
              About
            </a>
          </li>
          <li className={`w-full text-center transition-all duration-300 md:opacity-100 md:translate-y-0 ${isOpen ? 'opacity-100 translate-y-0 delay-[300ms]' : 'opacity-0 -translate-y-[10px] md:translate-y-0'}`}>
            <a
              href="/#faq"
              className={`block py-[0.6rem] px-4 text-[0.85rem] font-medium transition-all duration-300 md:inline md:p-0 ${!isBlogPage && !isToolPage && activeSection === 'faq' ? 'text-brand-blue underline underline-offset-4' : 'text-brand-dim hover:text-brand-blue hover:underline hover:underline-offset-4'}`}
              onClick={handleNavLinkClick}
            >
              FAQ
            </a>
          </li>
          <li className={`w-full text-center transition-all duration-300 md:opacity-100 md:translate-y-0 ${isOpen ? 'opacity-100 translate-y-0 delay-[350ms]' : 'opacity-0 -translate-y-[10px] md:translate-y-0'}`}>
            <a
              href="/blog"
              className={`block py-[0.6rem] px-4 text-[0.85rem] font-medium transition-all duration-300 md:inline md:p-0 ${isBlogPage ? 'text-brand-blue underline underline-offset-4' : 'text-brand-dim hover:text-brand-blue hover:underline hover:underline-offset-4'}`}
              onClick={handleNavLinkClick}
            >
              Blog
            </a>
          </li>
          <li className={`w-full text-center transition-all duration-300 md:opacity-100 md:translate-y-0 ${isOpen ? 'opacity-100 translate-y-0 delay-[400ms]' : 'opacity-0 -translate-y-[10px] md:translate-y-0'}`}>
            <a
              href="/review-responder"
              className={`block py-[0.6rem] px-4 text-[0.85rem] font-medium transition-all duration-300 md:inline md:p-0 ${isToolPage ? 'text-brand-blue underline underline-offset-4' : 'text-brand-dim hover:text-brand-blue hover:underline hover:underline-offset-4'}`}
              onClick={handleNavLinkClick}
            >
              Demo
            </a>
          </li>
          <li className={`w-full text-center transition-all duration-300 md:opacity-100 md:translate-y-0 ${isOpen ? 'opacity-100 translate-y-0 delay-[450ms]' : 'opacity-0 -translate-y-[10px] md:translate-y-0'}`}>
            <a
              href="/#contact"
              className={`
                block mx-auto my-3 w-fit py-2 px-4 rounded border border-brand-blue text-[0.85rem] font-medium transition-all duration-300 md:inline md:m-0
                ${!isBlogPage && !isToolPage && activeSection === 'contact' ? 'bg-brand-blue text-brand-bg shadow-[0_0_15px_rgba(121,192,255,0.4)]' : 'text-brand-blue hover:bg-brand-blue hover:text-brand-bg hover:shadow-[0_0_15px_rgba(121,192,255,0.4)]'}
              `}
              onClick={handleNavLinkClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
