import React from 'react'
import Marquee from "react-fast-marquee";

type Props = {}

const Technologies = (props: Props) => {
  return (
    <div className='text-xl md:text-xl lg:text-3xl text-slate-200'>
      <Marquee gradientWidth={700} speed={30} className='pb-5 overflow-hidden'>
        <span className="text-[#61DAFB]">React</span>,&nbsp;
        <span className="text-[#E10098]">GraphQL</span>,&nbsp;
        <span className="text-[#68A063]">Node.js</span>,&nbsp;
        <span className="text-[#61DAFB]">React Native</span>,&nbsp;
        <span className="text-[#FF4154]">React Query</span>,&nbsp;
        <span className="text-[#CA4245]">React Router</span>,&nbsp;
        <span className="text-[#000000]">Next.js</span>,&nbsp;
        <span className="text-[#764ABC]">Redux</span>,&nbsp;
        <span className="text-[#3A69A8]">Remix</span>,&nbsp;
        <span className="text-[#E33332]">React Testing Library</span>,&nbsp;
        <span className="text-[#FF4785]">Storybook</span>,&nbsp;
        <span className="text-[#319795]">ChakraUI</span>,&nbsp;
        <span className="text-[#DB7093]">Styled-components</span>,&nbsp;
        <span className="text-[#764ABC]">Redux Toolkit</span>,&nbsp;
        <span className="text-[#CB0000]">SWR</span>,&nbsp;
        <span className="text-[#0055FF]">Framer Motion</span>,&nbsp;
        <span className="text-[#38B2AC]">TailwindCSS</span>,&nbsp;
        <span className="text-[#00B0FF]">Material UI</span>,&nbsp;
        <span className="text-[#00BF9A]">Cypress</span>,
      </Marquee>
      
      <Marquee direction='right' gradientWidth={400} speed={30} className='pb-5 overflow-hidden'>
        <span className="text-[#61DAFB]">React</span>,&nbsp;
        <span className="text-[#E10098]">GraphQL</span>,&nbsp;
        <span className="text-[#68A063]">Node.js</span>,&nbsp;
        <span className="text-[#61DAFB]">React Native</span>,&nbsp;
        <span className="text-[#FF4154]">React Query</span>,&nbsp;
        <span className="text-[#CA4245]">React Router</span>,&nbsp;
        <span className="text-[#000000]">Next.js</span>,&nbsp;
        <span className="text-[#764ABC]">Redux</span>,&nbsp;
        <span className="text-[#3A69A8]">Remix</span>,&nbsp;
        <span className="text-[#E33332]">React Testing Library</span>,&nbsp;
        <span className="text-[#FF4785]">Storybook</span>,&nbsp;
        <span className="text-[#319795]">ChakraUI</span>,&nbsp;
        <span className="text-[#DB7093]">Styled-components</span>,&nbsp;
        <span className="text-[#764ABC]">Redux Toolkit</span>,&nbsp;
        <span className="text-[#CB0000]">SWR</span>,&nbsp;
        <span className="text-[#0055FF]">Framer Motion</span>,&nbsp;
        <span className="text-[#38B2AC]">TailwindCSS</span>,&nbsp;
        <span className="text-[#00B0FF]">Material UI</span>,&nbsp;
        <span className="text-[#00BF9A]">Cypress</span>,
      </Marquee>
    </div>
  )
}

export default Technologies;
