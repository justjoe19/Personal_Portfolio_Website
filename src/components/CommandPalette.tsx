import { useEffect, useMemo, useRef, useState } from 'react';
import { OPEN_PALETTE_EVENT } from '../lib/events';
import { projects } from '../data/projects';
import { getEmail } from '../lib/email';

interface Command {
  id: string;
  label: string;
  group: 'Navigate' | 'Pages' | 'Projects' | 'Actions';
  hint?: string;
  run: () => void | Promise<void>;
}

const go = (href: string) => () => {
  window.location.href = href;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const commands = useMemo<Command[]>(
    () => [
      { id: 'services', label: 'Services', group: 'Navigate', run: go('/#services') },
      { id: 'craft', label: 'How this site is built', group: 'Navigate', run: go('/#craft') },
      { id: 'rankradius', label: 'RankRadius', group: 'Navigate', run: go('/#rankradius') },
      { id: 'work', label: 'Selected work', group: 'Navigate', run: go('/#work') },
      { id: 'pricing', label: 'Pricing', group: 'Navigate', hint: 'from $500', run: go('/#pricing') },
      { id: 'hosting', label: 'Hosting & maintenance', group: 'Navigate', hint: '$100/mo', run: go('/#hosting') },
      { id: 'about', label: 'About', group: 'Navigate', run: go('/#about') },
      { id: 'faq', label: 'FAQ', group: 'Navigate', run: go('/#faq') },
      { id: 'portfolio', label: 'Portfolio', group: 'Pages', run: go('/work') },
      { id: 'blog', label: 'Blog', group: 'Pages', run: go('/blog') },
      { id: 'review', label: 'AI Review Responder demo', group: 'Pages', run: go('/review-responder') },
      ...projects.map<Command>((p) => ({ id: `project-${p.slug}`, label: p.name, group: 'Projects', hint: p.kind, run: go(`/work#${p.slug}`) })),
      { id: 'start', label: 'Start a project', group: 'Actions', hint: '↵', run: go('/#contact') },
      {
        id: 'email',
        label: 'Copy email address',
        group: 'Actions',
        hint: getEmail(),
        run: async () => {
          try {
            await navigator.clipboard.writeText(getEmail());
            setToast('Email copied');
          } catch {
            window.location.href = `mailto:${getEmail()}`;
          }
        },
      },
      { id: 'call', label: 'Call (574) 213-8502', group: 'Actions', run: go('tel:+15742138502') },
      { id: 'rr', label: 'Visit rankradius.io', group: 'Actions', hint: '↗', run: () => void window.open('https://rankradius.io', '_blank', 'noopener') },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? commands.filter((c) => `${c.label} ${c.group}`.toLowerCase().includes(q)) : commands;
  }, [commands, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery('');
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(''), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [active]);

  const runCommand = (c: Command) => {
    setOpen(false);
    void c.run();
  };

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      // Focus trap: results are navigated with the arrow keys, so Tab never leaves the dialog.
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && filtered[active]) {
      e.preventDefault();
      runCommand(filtered[active]);
    }
  };

  let lastGroup = '';

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[14vh]" role="presentation">
          <div className="absolute inset-0 bg-night/70 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden="true"></div>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search the site"
            className="relative w-full max-w-[560px] overflow-hidden rounded-2xl border border-line-strong bg-surface/95 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-[reveal_180ms_ease-out]"
          >
            <div className="flex items-center gap-3 border-b border-line px-5">
              <svg className="h-4 w-4 shrink-0 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKey}
                placeholder="Search pages, projects, or actions…"
                className="h-14 w-full bg-transparent text-[0.95rem] text-ink placeholder:text-muted focus:outline-none"
                role="combobox"
                aria-expanded="true"
                aria-controls="palette-list"
                aria-activedescendant={filtered[active] ? `cmd-${filtered[active].id}` : undefined}
              />
              <kbd className="rounded-md border border-line px-1.5 py-0.5 font-mono text-[0.65rem] text-muted">ESC</kbd>
            </div>
            <ul id="palette-list" ref={listRef} role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && <li className="px-3 py-8 text-center text-sm text-muted">No results</li>}
              {filtered.map((c, i) => {
                const header = c.group !== lastGroup ? c.group : null;
                lastGroup = c.group;
                return (
                  <li key={c.id} role="presentation">
                    {header && <p className="px-3 pt-3 pb-1.5 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">{header}</p>}
                    <div
                      id={`cmd-${c.id}`}
                      role="option"
                      aria-selected={i === active}
                      data-index={i}
                      onMouseMove={() => setActive(i)}
                      onClick={() => runCommand(c)}
                      className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-[0.92rem] ${
                        i === active ? 'bg-white/[0.07] text-ink' : 'text-body'
                      }`}
                    >
                      <span>{c.label}</span>
                      {c.hint && <span className="font-mono text-[0.7rem] text-muted">{c.hint}</span>}
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center justify-between border-t border-line px-5 py-2.5 font-mono text-[0.65rem] text-muted">
              <span>↑↓ navigate · ↵ select</span>
              <span>Michiana Dev</span>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <div role="status" className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-line-strong bg-surface px-4 py-2 text-sm text-ink shadow-xl">
          {toast}
        </div>
      )}
    </>
  );
}
