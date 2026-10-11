import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { OPEN_PALETTE_EVENT } from '../lib/events';

const SearchIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

const LINKS = [
  { href: '/services', label: 'Services & Pricing' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

const INDUSTRIES = [
  { href: '/contractors', label: 'Contractors & home services' },
  { href: '/restaurants', label: 'Restaurants' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState('/');
  const [shortcut, setShortcut] = useState('⌘K');
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const industriesRef = useRef<HTMLLIElement>(null);

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
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  useEffect(() => {
    if (!industriesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIndustriesOpen(false);
        industriesRef.current?.querySelector('button')?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!industriesRef.current?.contains(e.target as Node)) setIndustriesOpen(false);
    };
    const onFocusOut = (e: FocusEvent) => {
      if (e.relatedTarget && !industriesRef.current?.contains(e.relatedTarget as Node)) setIndustriesOpen(false);
    };
    const el = industriesRef.current;
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onPointer);
    el?.addEventListener('focusout', onFocusOut);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onPointer);
      el?.removeEventListener('focusout', onFocusOut);
    };
  }, [industriesOpen]);

  const openSearch = () => {
    setIsOpen(false);
    window.dispatchEvent(new Event(OPEN_PALETTE_EVENT));
  };

  const isActive = (href: string) => !href.includes('#') && path.startsWith(href);
  const industryActive = INDUSTRIES.some((i) => path.startsWith(i.href));

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
          <li ref={industriesRef} className="relative">
            <button
              type="button"
              aria-expanded={industriesOpen}
              aria-controls="industries-menu"
              onClick={() => setIndustriesOpen((o) => !o)}
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.875rem] transition-colors hover:bg-white/[0.06] hover:text-ink ${
                industryActive ? 'text-ink' : 'text-muted'
              }`}
            >
              Industries
              <svg className={`h-3 w-3 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {industriesOpen && (
              <ul id="industries-menu" className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-line-strong bg-surface/95 p-1.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                {INDUSTRIES.map((i) => (
                  <li key={i.href}>
                    <a
                      href={i.href}
                      aria-current={path.startsWith(i.href) ? 'page' : undefined}
                      className="block rounded-xl px-3.5 py-2.5 text-[0.875rem] text-body transition-colors hover:bg-white/[0.06] hover:text-ink"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
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
          <a href="/contact" className="btn-primary !px-3.5 !py-2 !text-[0.8rem] sm:!px-4 sm:!text-[0.85rem]">
            Contact
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
            <li className="border-b border-line py-4">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted">Industries</p>
              <ul className="mt-2">
                {INDUSTRIES.map((i) => (
                  <li key={i.href}>
                    <a href={i.href} onClick={() => setIsOpen(false)} className="block py-2 text-2xl font-semibold tracking-tight text-ink">
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <a href="tel:+15742138502" className="btn-ghost mt-8 w-full">
            Call (574) 213-8502
          </a>
          <button type="button" onClick={openSearch} className="btn-ghost mt-3 w-full">
            <SearchIcon className="h-4 w-4" />
            Search the site
          </button>
          <a href="/contact" onClick={() => setIsOpen(false)} className="btn-primary mt-3 w-full">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
