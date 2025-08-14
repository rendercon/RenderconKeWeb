"use client";

import Link from "next/link";
import { Button } from "./Button";
import { Container } from "./Container";
import Navbar from "./Navbar";
import renderconWB from "@/app/images/logos/Rendercon-wb.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

type TNavbar = {
  scrolled: boolean;
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1023);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initialize on mount
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setIsMobileMenuOpened(!isMobileMenuOpened);
  const closeMenu = () => setIsMobileMenuOpened(false);

  return (
    <header
      className={`z-50 w-full sticky top-0 px-4 transition-all duration-300 ${
        scrolled ? "bg-[#240046] bg-opacity-100" : "bg-[#42208c] bg-opacity-80"
      }`}
    >
      <Container className="flex justify-between items-center h-[80px]">
        <Link href="#home">
          <Image
            src={renderconWB}
            alt="Rendercon white background logo"
            unoptimized
            height={50}
          />
        </Link>

        {/* Show menu button on mobile */}
        {isMobileView ? (
          <button onClick={toggleMenu} className="-mr-6">
            {isMobileMenuOpened ? (
              <RxCross2 className="text-white text-2xl hover:text-yellow-500" />
            ) : (
              <RiMenu3Line className="text-white text-2xl hover:text-yellow-500" />
            )}
          </button>
        ) : (
          <div className="flex items-center justify-between w-full">
            <Navbar /> {/* Full Navbar links */}
            <a
                  href="https://bit.ly/rcke25adv" target="_blank" rel="noopener noreferrer"
                  className="text-md md:text-lg bg-purple-500 hover:bg-yellow-500 text-white py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Get Tickets Here
                </a>
          </div>
        )}
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpened && isMobileView && (
        <div className="flex flex-col items-end py-4 pl-2">
          <div className="font-mono text-gray-50 pb-4">
            <Navbar onLinkClick={closeMenu} /> {/* Mobile Navbar links */}
          </div>
          <a
                  href="https://bit.ly/rcke25adv" target="_blank" rel="noopener noreferrer"
                  className="text-md md:text-lg bg-purple-500 hover:bg-yellow-500 text-white py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Get Tickets Here
                </a>
        </div>
      )}
    </header>
  );
}
