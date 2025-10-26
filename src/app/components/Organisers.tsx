import React from 'react';
import { Container } from './Container';
import { FaUserTie, FaUserMd,  FaUserSecret, FaUserAstronaut } from 'react-icons/fa';
import { FiUserCheck, FiUser } from 'react-icons/fi';
import { BsPersonBadge } from 'react-icons/bs';
import { IconWrapper } from '../../components/IconWrapper';


type Organisers = {
  name: string;
  icon: any; // Store the icon component reference
  iconColor: string;
  link: string;
  description: string;
};

const organisers: Organisers[] = [
  {
    name: "Cindy Kandie",
    icon: FaUserTie, // Icon for professional persona
    iconColor: "text-[#139599]",
    link: "https://www.linkedin.com/in/cindykandie/",
    description: 'Frontend Engineer | Developer Relations Specialist | Community Manager | React Native Expert | Tech Event Organizer | WTM Ambassador',
  },
  {
    name: "Rama Ochieng'",
    icon: FaUserSecret, // Icon representing learning and expertise
    iconColor: "text-[#1b0233]",
    link: "https://www.linkedin.com/in/ramaochieng/",
    description: 'Frontend Software Engineer & Designer (React.js/React Native, JavaScript/Typescript, Next.js) | Open Source Maintainer & Contributor',
  },
  {
    name: "Abel Masila",
    icon: FaUserMd, // Icon showing authority and experience
    iconColor: "text-[#0790b3]",
    link: "https://www.linkedin.com/in/abelmasila/",
    description: 'Senior Frontend Engineer (Reactjs/Vue/Svelte) | Speaker | Mentor',
  },
  {
    name: "Ben Wasonga",
    icon: FaUserAstronaut, // Icon for trustworthiness and involvement
    iconColor: "text-[#2e72f0]",
    link: "https://www.linkedin.com/in/benwasonga/",
    description: 'Innovative Technical Support Engineer | Web Development Enthusiast | Community Builder | B.Ed English and Literature',
  },
  {
    name: "Sisco Cherono",
    icon: FiUserCheck, // Simple user icon for versatility
    iconColor: "text-[#edeff0]",
    link: "https://www.linkedin.com/company/renderconke/",
    description: 'Web Development Enthusiast | Community Builder | Frontend Developer',
  },
];

function Organisers() {
  return (
    <Container className="pb-10 min-h-[800px]">
      <h3 className="text-slate-200 text-3xl pb-10 text-center">
        <span className='text-[#eee712] font-extrabold'>Organizing</span> Team
      </h3>

      <div className="w-full flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8 ">
        {organisers.length > 0 ? (
          organisers.map((organiser) => (
            <div
              key={organiser.name}
              className="w-full md:w-[30%] flex flex-col items-center  p-5 bg-[#340a5c] hover:bg-[#42208c] transition duration-600 ease-in-out rounded-xl shadow-lg min-h-[350px]"
            >
              <a
                href={organiser.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
              >
                <IconWrapper icon={organiser.icon} className={`${organiser.iconColor} h-[100px] w-[100px]`} />
                <h3 className="mt-4 text-xl font-semibold text-white hover:text-[#90e0ef] transition">
                  {organiser.name}
                </h3>
                <p className="font-mono text-sm leading-6 text-slate-300 text-center mt-10">
                  {organiser.description}
                </p>
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
  );
}

export default Organisers;
