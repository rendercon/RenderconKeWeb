import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'

type NavbarProps = {
  onLinkClick: () => void;
}

function Navbar({ onLinkClick }: NavbarProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [activePath, setActivePath] = useState<string | null>(null);

  useEffect(() => {
    // Only run this effect on the client (after component has mounted)
    setIsMounted(true);

    if (typeof window !== 'undefined') {
      const currentPath = window.location.hash || window.location.pathname;
      setActivePath(currentPath);
    }
  }, []);

  const isActive = (href: string) => {
    return activePath === href;
  };

  if (!isMounted) return null; // Prevent SSR issues by not rendering the component until it's mounted

  return (
    <ul className="w-full lg:w-[400px] flex flex-col items-end h-[120px] lg:h-auto lg:flex-row font-mono justify-between lg:items-center">
      <li onClick={onLinkClick}>
        <Link href="/about" className={`${isActive("/about") ? 'font-extrabold text-yellow-400' : 'text-slate-200'}`}>
          About
        </Link>
      </li>
      <li onClick={onLinkClick}>
        <Link href="#speakers" className={`${isActive("#speakers") ? 'font-extrabold text-yellow-400' : 'text-slate-200'}`}>
          Speakers
        </Link>
      </li>
      <li onClick={onLinkClick}>
        <Link href="#sponsors" className={`${isActive("#sponsors") ? 'font-extrabold text-yellow-400' : 'text-slate-200'}`}>
          Sponsors
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
