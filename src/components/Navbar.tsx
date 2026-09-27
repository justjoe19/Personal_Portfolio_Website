import { useState, useEffect } from 'react';
import Logo from './Logo';
import { OPEN_PALETTE_EVENT } from '../lib/events';

const SearchIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

const LINKS = [
  { href: '/work', label: 'Work' },
  { href: '/#services', label: 'Services' },
  { href: '/#rankradius', label: 'RankRadius' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState('/');
  const [shortcut, setShortcut] = useState('⌘K');

  useEffect(() => {
    // window isn't available during Astro's SSR pass, so these can only be read post-hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPath(window.location.pathname);
    if (!/Mac|iPhone|iPad/.test(navigator.platform)) setShortcut('Ctrl K');
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const openSearch = () => {
    setIsOpen(false);
    window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));
  };

  const isActive = (href: string) => !href.includes('#') && path.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:pt-4">
      <nav
        aria-label="Main"
        className={`mx-auto flex h-14 max-w-[1100px] items-center justify-between gap-2 rounded-full border border-line-strong bg-night/85 pl-4 pr-1.5 sm:pr-2 backdrop-blur-xl backdrop-saturate-150 transition-shadow duration-500 ${
          scrolled || isOpen ? 'shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]' : ''
        }`}
      >
        <a href="/" className="flex items-center gap-2.5 text-ink" aria-label="Michiana Dev — home">
          <Logo className="h-7 w-7" />
          <span className="text-[0.98rem] font-semibold tracking-tight">
            Michiana<span className="text-muted">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`rounded-full px-3.5 py-2 text-[0.875rem] transition-colors hover:bg-white/[0.06] hover:text-ink ${
                  isActive(link.href) ? 'text-ink' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search the site"
            aria-keyshortcuts="Meta+K Control+K"
            className="hidden items-center gap-2 rounded-full border border-line py-1.5 pr-1.5 pl-3 text-[0.82rem] text-muted transition-colors hover:border-line-strong hover:text-ink sm:flex"
          >
            <SearchIcon className="h-3.5 w-3.5" />
            <span>Search</span>
            <kbd className="rounded-full bg-white/[0.06] px-2 py-0.5 font-mono text-[0.68rem] text-muted">{shortcut}</kbd>
          </button>
          <a href="/#contact" className="btn-primary !px-3.5 !py-2 !text-[0.8rem] sm:!px-4 sm:!text-[0.85rem]">
            Start a project
          </a>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${isOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}></span>
            <span className={`h-[1.5px] w-5 bg-ink transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-[1.5px] w-5 bg-ink transition-transform duration-300 ${isOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="fixed inset-x-3 top-20 bottom-3 overflow-y-auto rounded-3xl border border-line-strong bg-surface/95 p-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a href={link.href} onClick={() => setIsOpen(false)} className="block py-4 text-3xl font-semibold tracking-tight text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" onClick={openSearch} className="btn-ghost mt-8 w-full">
            <SearchIcon className="h-4 w-4" />
            Search the site
          </button>
          <a href="/#contact" onClick={() => setIsOpen(false)} className="btn-primary mt-3 w-full">
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}
