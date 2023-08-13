'use client';

import Image from 'next/image'

import { Container } from './Container';

import LogoReactAdvancedLondon from '../images/logos/ReactAdvancedLondon.png'
import LogoReactDevsKe from '../images/logos/ReactdevskeLogo.png';
import LogoOscaNairobi from '../images/logos/osca_nairobi_logo.jpg';


type Partners = {
    name: string;
    logo: any;
    link: string;
}



const partners: Partners[] = [
    // partners name and logo goes here
    {
        name: 'ReactDevsKe',
        logo: LogoReactDevsKe,
        link: 'https://reactdevske.org'
    },
    {
        name: 'OSCA Nairobi',
        logo: LogoOscaNairobi,
        link: 'https://github.com/OSCA-Nairobi'
    },
  ]

const Partners = () => {

    const addr = "partnerships";
    const tld = "rendercon.org";

    const handleEmailClick = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        window.location.href = `mailto:${addr}@${tld}`;
    }


  return (
    <section id="partners" aria-label="Partners" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-slate-200 sm:text-5xl">
                Our Partners
        </h2>
            
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          { partners.map((partner: any) => (
            <div
            key={partner.name}
            className="flex items-center justify-center"
            >
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <Image src={partner.logo} alt={partner.name} unoptimized height={150} />
              </a>
            </div>
          ))}
        </div>
          <p className="text-slate-400 text-xl mt-20 font-mono text-center">
              For more information on partnerships, please reach out to us <a href="#" onClick={handleEmailClick}><u>HERE</u></a>.
          </p>
      </Container>
    </section>
  )
}

export default Partners;