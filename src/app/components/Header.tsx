'use client'

import Link from 'next/link'
import { Button } from './Button'
import { Container } from './Container'
import Navbar from './Navbar'
import renderconWB from '@/app/images/logos/Rendercon-wb.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

type TNavbar={
  scrolled:boolean, 
}

function MobileNavbar({ scrolled }: TNavbar) {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false)

  const closeMenu = () => {
    setIsMobileMenuOpened(false);
  };

  return (
    <header className={`z-50 w-[full] sticky top-0 px-4 ${scrolled ? 'bg-[#240046] bg-opacity-100' : "bg-[#42208c] bg-opacity-80"}`}>
      <div className={'w-full h-[80px] flex justify-between items-center'}>
        <Link href="#home"><Image src={renderconWB} alt={'Rendercon white background logo'} unoptimized height={50} /></Link>
        <button onClick={() => setIsMobileMenuOpened(!isMobileMenuOpened)}>
          {isMobileMenuOpened ? <RxCross2 className={'text-white text-2xl'} /> : <RiMenu3Line className={'text-white text-2xl'} />}
        </button>
      </div>
      {isMobileMenuOpened &&
        <div className={'flex flex-col items-end py-4 pl-2'}>
          <div className={'font-mono text-gray-50 pb-4'}>
            <Navbar onLinkClick={closeMenu} /> {/* Pass the closeMenu function */}
          </div>
          <Button>
            <Link href="https://paydexp.com/renderconke-2024" target="_blank" rel="noopener noreferrer">Get Ticket</Link>
          </Button>
        </div>
      }
    </header>
  )
}

function LargeScreenNavbar(props: TNavbar){
  const {scrolled} = props

  return(
    <header className={`relative z-50 pb-16 lg:pt-8 md:sticky top-0 ${scrolled? 'bg-[#240046] bg-opacity-100' : "bg-[#42208c] bg-opacity-80"}`} >
      <Container className="flex flex-wrap items-center justify-between align-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Link href="#home"><Image src={renderconWB} alt={'Rendercon white background logo'} unoptimized height={60}/></Link>
        </div>
        <div className={'flex flex-col font-mono text-gray-50 items-center justify-center'}>
          <Navbar />
        </div>
        <div className="mt-5 pl-10  sm:mt-10 sm:flex md:pl-0 lg:pl-0 lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button>
          <Link 
            href="https://paydexp.com/renderconke-2024" target="_blank" rel="noopener noreferrer">Get Ticket</Link>
          </Button>
        </div>
      </Container>
    </header>
  )

}


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  
  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 200); 
    };
    
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);
  
  useEffect(() => {
    function checkInnerWidth(){
      if (window.innerWidth <= 1023) {
        setShowMobileMenu(true);
      }else{
        setShowMobileMenu(false)
      }
    }

    checkInnerWidth();

    window.addEventListener('resize', checkInnerWidth)
    return () => window.removeEventListener('resize', checkInnerWidth)
  }, [])


  return (
    showMobileMenu ? <MobileNavbar scrolled={scrolled}/> : <LargeScreenNavbar scrolled={scrolled}/>
  )
}
