import React from 'react'
import Marquee from "react-fast-marquee";

type Props = {}

const Technologies = (props: Props) => {
  return (
    <div className='text-3xl text-slate-300'>
        <Marquee gradient gradientColor={[24, 24, 24]} gradientWidth={400} speed={30} className='pb-5 overflow-hidden'>
        React, GraphQL, Nodejs, React Native, React Query, React Router, Nextjs, Redux, Remix, React Testing Library, Storybook, ChakraUI, Styled-components, Redux Toolkit, SWR, Framer Motion, Tailwindcss, Material UI, Cypress,
        </Marquee>
        <Marquee direction='right'gradient gradientColor={[24, 24, 24]} gradientWidth={400} speed={30} className='pb-5 overflow-hidden'>
        React, GraphQL, Nodejs, React Native, React Query, React Router, Nextjs, Redux, Remix, React Testing Library, Storybook, ChakraUI, Styled-components, Redux Toolkit, SWR, Framer Motion, Tailwindcss, Material UI, Cypress, 
        </Marquee>
    </div>
  )
}

export default Technologies;