'use client';

import Image, { StaticImageData } from 'next/image'

import { Container } from './Container';
import LogoDevKenya from '../images/logos/devkenya_logo.png';



type Sponsors = {
    name: string;
    logo: string | StaticImageData;
    link: string;
}



const sponsors: Sponsors[] = [
    // sponsor name and logo goes here


  ]

const Sponsors = () => {

    const addr = "sponsors";
    const tld = "rendercon.org";

    const handleEmailClick = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        window.location.href = `mailto:${addr}@${tld}`;
    }


  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-slate-200 sm:text-5xl">
             Our Sponsors
        </h2>
        <div className="mx-auto mt-20 max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          { sponsors.length > 0 ? 
          sponsors.map((sponsor) => (
            <>
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <Image src={sponsor.logo} alt={sponsor.name} unoptimized height={150}/>
              </a>
            </div>

              <p className="text-slate-400 text-xl font-mono text-center pt-5">
                <br/> Reach out for our sponsorship packages <a href="mailto: sponsors@rendercon.org" className='hover:underline text-[#eee712]'>here</a>
              </p>
              </>
            )) : (
                <p className="text-slate-300 text-xl font-mono text-center">
                    Leverage our platform to put your brand on the spotlight. Become a part of Rendercon Kenya&apos;s mission to nurture innovation and best practices within the React ecosystem.
                    <br/> Reach out for our sponsorship packages <a href="mailto: sponsors@rendercon.org" className='hover:underline text-[#eee712]'>here</a>
                </p>
            )}
        </div>
      </Container>
    </section>
  )
}

export default Sponsors;