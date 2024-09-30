"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

type NavbarProps = {
  onLinkClick?: () => void;
};

function Navbar({ onLinkClick }: NavbarProps) {
  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.hash || window.location.pathname;
      setActivePath(currentPath);
    }
  }, []); // Runs only once, when component mounts

  const isActive = (href: string) => activePath === href;

  return (
    <ul className="w-full lg:w-[400px] flex flex-col items-end h-[120px] lg:h-auto lg:flex-row font-mono justify-between lg:items-center md:mx-auto font-semibold">
       <li onClick={onLinkClick}>
        <Link href="/schedule" className={`${isActive("/schedule") ? 'font-extrabold text-yellow-400' : 'text-slate-200'}`}>
          Schedule
        </Link>
      </li>
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
