import React from 'react'
import { Container } from './Container'

const Hero = () => {
  return (
    <div className="relative pb-10 pt-6 sm:py-16">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tighter text-slate-200 text-center">
            <span className="sr-only">RenderconKe - </span> RenderCon KE 2024
          </h1>
          <div className="mt-4 md:mt-6 space-y-4 sm:space-y-6 font-display text-sm md:text-2xl tracking-tight text-slate-300 font-mono">
            <p className='text-center'>
              RenderCon Kenya invites you to explore the ever-evolving universe of React and React Native. 
              Unite with software engineers, developers, and designers from all levels of expertise, and engage in an unforgettable experience of innovation, mentorship, and community spirit.
            </p>
            <p className='text-center'>
              This is more than just a conference - it&apos;s an opportunity to connect, share, and learn from the brightest minds in the industry.
            </p>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center justify-center text-md lg:text-2xl font-mono text-yellow-400 mt-8 sm:mt-10 font-bold">
            <p className='mr-2 flex items-center'>
              <time dateTime="2024-10-04">4th</time> - 
              <time dateTime="2024-10-05"> 5th October 2024</time>
              <p className={'hidden lg:block'}>•</p>
            </p>
            <p className={'ml-2'}>Nairobi, Kenya</p>
          </div>

          <div className='pt-8 sm:pt-10 lg:flex'>
            {/* <div className='pb-10 lg:pr-10'>

            <a 
            className="inline-flex justify-center rounded-lg bg-slate-600 px-4 py-2 text-base font-semibold font-mono text-white cursor-pointer hover:bg-slate-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 active:text-white/70"
            href="https://bit.ly/rcke24cfp" target="_blank" rel="noopener noreferrer">Submit your Session</a>
            
            </div> */}
      

          <div className='flex items-center align-center justify-center lg:mx-auto'>

            <a 
            className="inline-flex justify-center rounded-lg bg-[#7b2cbf] px-4 py-2 text-base font-semibold font-mono text-white cursor-pointer hover:bg-[#9d4edd] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 active:text-white/70"
            href="https://paydexp.com/renderconke-2024" target="_blank" rel="noopener noreferrer">Get Ticket</a>

          </div>
            
          </div>

          {/* <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 font-mono sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-center lg:text-left">
            {[
              ['Days', '2'],
              ['Venue', 'TBA'],
              ['Location', 'Nairobi, Kenya'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-slate-200">{name}</dt>
                <dd className="mt-0.5 text-4xl font-semibold tracking-tight text-slate-200 text-center">
                  {value}
                </dd>
              </div>
            ))}
          </dl> */}
        </div>
      </Container>
    </div>
  )
}

export default Hero