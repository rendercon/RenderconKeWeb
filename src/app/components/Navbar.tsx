'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../images/logos/rendercon-logo.svg';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Partners', href: '/partners' },
  { label: 'Attend', href: '/attend' },
];

const attendLinks = [
  { label: 'Schedule', href: '/schedule' },
  { label: 'Attend overview', href: '/attend' },
  { label: 'Tickets', href: '/attend#tickets' },
  { label: 'Venue', href: '/attend#venue' },
  { label: 'FAQs', href: '/attend#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const attendRef = useRef<HTMLDetailsElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
        if (attendRef.current) attendRef.current.open = false;
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (attendRef.current?.open) {
        attendRef.current.open = false;
        attendRef.current.querySelector('summary')?.focus();
      }
      if (isOpen) { setIsOpen(false); mobileToggleRef.current?.focus(); }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('pointerdown', onPointer);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const isActiveLink = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));
  const attendActive = isActiveLink('/attend') || isActiveLink('/schedule');
  const linkClass = (active: boolean) => `px-4 py-2 text-sm font-medium rounded-lg transition-colors ${active ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'}`;

  return <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-[#0F0B1E]/95 backdrop-blur-xl border-b border-brand-dark-border' : 'bg-[#0F0B1E]/90'}`}>
    <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image src={Logo} alt="RenderCon Kenya" width={36} height={36} className="transition-opacity group-hover:opacity-80 rounded-xl" priority unoptimized />
          <span className="text-white font-bold text-lg tracking-tight">RenderCon <span className="text-brand-gold text-xs font-normal">Kenya</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.filter(link => link.href !== '/attend').map(link => <Link key={link.href} href={link.href} aria-current={isActiveLink(link.href) ? 'page' : undefined} className={linkClass(isActiveLink(link.href))}>{link.label}</Link>)}
          <details ref={attendRef} className="relative" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) event.currentTarget.open = false; }}>
            <summary className={`list-none cursor-pointer flex items-center gap-2 [&::-webkit-details-marker]:hidden ${linkClass(attendActive)}`}>
              Attend
              <svg aria-hidden="true" className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m2 4 4 4 4-4" /></svg>
            </summary>
            <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-brand-dark-border bg-[#0F0B1E] p-2 shadow-xl">
              {attendLinks.map(link => <Link key={link.href} href={link.href} className="block rounded-lg px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white" onClick={() => { if (attendRef.current) attendRef.current.open = false; }}>{link.label}</Link>)}
            </div>
          </details>
        </div>

        <button ref={mobileToggleRef} type="button" className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen} aria-controls="mobile-navigation">
          <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
    </nav>

    <AnimatePresence>
      {isOpen && <motion.nav id="mobile-navigation" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="md:hidden border-t border-brand-dark-border bg-[#0F0B1E] overflow-hidden">
        <div className="px-4 py-4 space-y-1">
          {navLinks.map(link => <Link key={link.href} href={link.href} aria-current={isActiveLink(link.href) ? 'page' : undefined} className={`block ${linkClass(link.href === '/attend' ? attendActive : isActiveLink(link.href))}`} onClick={() => setIsOpen(false)}>{link.label}</Link>)}
          <div className="ml-4 border-l border-brand-dark-border pl-3" aria-label="Attendee information">
            {attendLinks.filter(link => link.href !== '/attend').map(link => <Link key={link.href} href={link.href} className="block rounded-lg px-4 py-2 text-sm text-slate-400 hover:text-white" onClick={() => setIsOpen(false)}>{link.label}</Link>)}
          </div>
        </div>
      </motion.nav>}
    </AnimatePresence>
  </header>;
}
