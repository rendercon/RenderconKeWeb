'use client'

import Link from 'next/link'
import { Button } from './Button'
import { Container } from './Container'
import Navbar from './Navbar'
import renderconWB from '@/app/images/logos/Rendercon-wb.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.scrollY > 200); 
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <header className={`relative z-50 pb-11 lg:pt-8 md:sticky top-0 ${scrolled? 'bg-[#240046] bg-opacity-100' : "bg-[#42208c] bg-opacity-80"}`} >
      <Container className="flex flex-wrap items-center justify-between align-center sm:justify-between lg:flex-nowrap">
      <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Link href="#home"><Image src={renderconWB} alt={'Rendercon white background logo'} unoptimized height={60}/></Link>
        </div>
        {/* <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-100/10 py-4 font-mono text-sm text-gray-50 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0"> */}
          <div className={'flex flex-col font-mono text-gray-50 items-center justify-center'}>
            <Navbar/>
            
          </div>
        {/* </div> */}
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
