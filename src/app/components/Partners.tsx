'use client';

import Image, { StaticImageData } from 'next/image';
import { Container } from './Container';

import LogoDevKenya from '../images/logos/devkenya_logo.png';
import LogoReactDevsKe from '../images/logos/ReactdevskeLogo.png';
import LogoOscaNairobi from '../images/logos/osca_nairobi_logo.jpg';
import LogoSpaceYaTech from '../images/logos/SPACEYATECH_LOGO.jpg';
import LogoSupaBase from '../images/logos/supabase_logo_wordmark.png';

type Partners = {
    name: string;
    logo: StaticImageData;
    link: string;
};

const partners: Partners[] = [
    {
        name: 'Dev Kenya',
        logo: LogoDevKenya,
        link: 'https://devkenya.com',
    },
    {
        name: 'ReactDevsKe',
        logo: LogoReactDevsKe,
        link: 'https://reactdevske.org',
    },
    {
        name: 'OSCA Nairobi',
        logo: LogoOscaNairobi,
        link: 'https://github.com/OSCA-Nairobi',
    },
    {
        name: 'Space Ya Tech',
        logo: LogoSpaceYaTech,
        link: 'https://spaceyatech.com/',
    },
    {
        name: 'Supabase',
        logo: LogoSupaBase,
        link: 'https://supabase.com/',
    },
];

const Partners = () => {
    const addr = 'partnerships';
    const tld = 'rendercon.org';

    const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        window.location.href = `mailto:${addr}@${tld}`;
    };

    return (
        <section id="partners" aria-label="Partners" className="py-20 sm:py-32">
            <Container>
                <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-slate-200 sm:text-5xl">
                    Sponsors & Partners Hall of Fame
                </h2>

                <div className="mx-auto flex items-center justify-center gap-24 mt-20 flex-row flex-wrap">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="flex items-center justify-center filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                        >
                            <a href={partner.link} target="_blank" rel="noopener noreferrer">
                                <Image src={partner.logo} alt={partner.name} unoptimized height={50} />
                            </a>
                        </div>
                    ))}
                </div>

                <p className="text-slate-200 text-xl mt-20 font-mono text-center">
                    For more information on sponsorship and partnership, please reach out to us{' '}
                    <a href="#" onClick={handleEmailClick} className="hover:underline text-[#eee712]">
                        here
                    </a>
                </p>
            </Container>
        </section>
    );
};

export default Partners;
