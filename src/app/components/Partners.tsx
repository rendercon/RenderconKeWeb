'use client';

import Image from 'next/image'

import { Container } from './Container';

import LogoReactAdvancedLondon from '../images/logos/ReactAdvancedLondon.png'


type Partners = {
    name: string;
    logo: any;
}



const partners: Partners[] = [
    // partners name and logo goes here
    {
        name: 'ReactAdvancedLondon',
        logo: LogoReactAdvancedLondon,
    },
  ]

const Partners = () => {


  return (
    <section id="partners" aria-label="Partners" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-slate-200 sm:text-5xl">
                Our Partners
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
            >
              <Image src={partner.logo} alt={partner.name} unoptimized height={150} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Partners;