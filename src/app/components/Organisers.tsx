import React from 'react'
import { Container } from './Container'
import Image, { StaticImageData } from 'next/image';
import OrganisersPlaceholder from "../images/logos/organiser-placeholder.jpeg";
import OrganisersPlaceholderFemale from '../images/logos/organisers-placeholder-fem.jpeg'


type Organisers = {
    name: string;
    logo: string | StaticImageData;
    link: string;
    description: string;
};
  
  const organisers: Organisers[] = [
    { name: "Cindy Kandie", logo: OrganisersPlaceholderFemale, link: "https://www.linkedin.com/in/cindykandie/", description: 'Frontend Engineer | Developer Relations Specialist | Community Manager | React Native Expert | Tech Event Organizer | WTM Ambassador'},
    { name: "Rama Ochieng'", logo: OrganisersPlaceholder, link: "https://www.linkedin.com/in/ramaochieng/", description: 'Frontend Software Engineer & Designer (React.js/React Native, JavaScript/Typescript, Next.js) | Open Source Maintainer & Contributor' },
    { name: "Abel Masila", logo: OrganisersPlaceholder, link: "https://www.linkedin.com/in/abelmasila/", description: 'Senior Frontend Engineer(Reactjs/Vue/Svelte) | Speaker | Mentor' },
    { name: "Ben Wasonga", logo: OrganisersPlaceholder, link: "https://www.linkedin.com/in/benwasonga/", description: 'Innovative Technical Support Engineer | Web Development Enthusiast | Community Builder | B.Ed English and Literature' },
    { name: "Sisco Cherono", logo: OrganisersPlaceholderFemale, link: "https://www.linkedin.com/company/renderconke/", description: 'Web Development Enthusiast | Community Builder | Frontend Developer' },
  ];

function Organisers() {
  return (
    <Container
      className="pb-10 min-h-[800px]"
    >
        <h3 className={'text-slate-200 text-xl underline pb-10'}>Organisers</h3>

        <div className="w-full flex gap-10 md:gap-24 flex-col md:flex-row md:flex-wrap items-center justify-center">
          {organisers.length > 0 ? (
            organisers.map((organiser) => (
              <div
                key={organiser.name}
                className="w-full md:w-[27%] flex"
              >
                <a
                  href={organiser.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={organiser.logo}
                    alt={organiser.name}
                    unoptimized
                    className={'rounded-3xl h-[300px] w-[300px]'}
                  />
                  <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{organiser.name}</h3>
                  <p className="font-mono  text-sm leading-6 text-slate-300">{organiser.description}</p>
                </a>
              </div>
            ))
          ) : (
            <p className="text-slate-300 text-xl font-mono text-center">
              RenderCon has no organisers at the moment 
            </p>
          )}
        </div>
    </Container>
  )
}

export default Organisers