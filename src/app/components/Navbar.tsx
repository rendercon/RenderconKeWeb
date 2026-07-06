'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../images/logos/rendercon-logo.svg';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Attend', href: '/attend' },
  { label: 'Community', href: '/community' },
  { label: 'Partners', href: '/partners' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActiveLink = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F0B1E]/90 backdrop-blur-xl border-b border-[#2D2550]/60 shadow-[0_1px_0_rgba(109,58,168,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src={Logo}
              alt="RenderCon Kenya"
              width={36}
              height={36}
              className="transition-opacity duration-200 group-hover:opacity-80 rounded-xl"
              priority
              unoptimized
            />
            <span className="text-white font-bold text-lg tracking-tight transition-opacity duration-200 group-hover:opacity-80">
              RenderCon <span className="text-brand-gold text-xs font-normal">Kenya</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActiveLink(link.href) ? 'page' : undefined}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActiveLink(link.href)
                    ? 'bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          {/* <div className="hidden md:flex items-center gap-3">
            <a
              href={EVENT_CONFIG.links.tickets}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Book Tickets Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div> */}

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#2D2550]/60 bg-[#0F0B1E]/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActiveLink(link.href) ? 'page' : undefined}
                  className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActiveLink(link.href)
                      ? 'bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* <div className="pt-3 pb-1">
                <a
                  href={EVENT_CONFIG.links.tickets}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Tickets Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
