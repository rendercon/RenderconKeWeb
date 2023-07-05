'use client';

import Image from 'next/image'

import { Container } from './Container';




type Sponsors = {
    name: string;
    logo: string;
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
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-slate-300 sm:text-5xl">
             Our Sponsors
        </h2>
        <div className="mx-auto mt-20 max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          { sponsors.length > 0 ? 
          sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
            )) : (
                <p className="text-slate-400 text-xl font-mono text-center">
                    Leverage our platform to put your brand on the spotlight. Become a part of Rendercon Kenya&apos;s mission to nurture innovation and best practices within the React ecosystem.
                    <br/> Reach out for our sponsorship packages <a href="#" onClick={handleEmailClick}><u>HERE</u></a>.
                </p>
            )}
        </div>
      </Container>
    </section>
  )
}

export default Sponsors;