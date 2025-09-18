'use client'
import React from "react";
import { Container } from "./Container";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  return (
    <div className="relative pb-10 pt-6 sm:py-16">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tighter text-slate-200 text-center">
            <span className="sr-only">RenderconKe - </span> RenderCon KE 2025
          </h1>
          <div className="mt-4 md:mt-6 space-y-4 sm:space-y-6 font-display text-sm md:text-xl lg:text-2xl xl:text-3xl tracking-tight text-slate-300 font-mono">
            <p className="text-center">
              RenderCon Kenya invites you to explore the ever-evolving universe
              of React and React Native. Unite with software engineers,
              developers, and designers from all levels of expertise, and engage
              in an unforgettable experience of innovation, mentorship, and
              community spirit.
            </p>
            <p className="text-center">
              This is more than just a conference - it&apos;s an opportunity to
              connect, share, and learn from the brightest minds in the
              industry.
            </p>
          </div>
          <CountdownTimer/>

            <div className="w-full flex flex-col items-center justify-center text-md lg:text-2xl font-mono text-yellow-400 mt-8 sm:mt-10 font-bold">
            <p className="flex items-center">
              {/* <time dateTime="2025-10-03">3rd</time> - */}
              <time dateTime="2025-10-04"> 4th October 2025</time>
              {/* <p className={"hidden lg:block"}>•</p> */}
              {/* <p className={"ml-2"}>Dates and Venue To be announced</p> */}
            </p>
            <p>Pride Inn Azure — Westlands, Nairobi</p>
            </div>

          <div className="pt-8 sm:pt-10 lg:flex">
            {/* <div className='pb-10 lg:pr-10'>

            <a 
            className="inline-flex justify-center rounded-lg bg-slate-600 px-4 py-2 text-base font-semibold font-mono text-white cursor-pointer hover:bg-slate-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 active:text-white/70"
            href="https://bit.ly/rcke25cfp" target="_blank" rel="noopener noreferrer">Submit your Session</a>
            
            </div> */}


            <div className="flex items-center gap-5 align-center justify-center lg:mx-auto">
              
                {/* <a
                  href="https://bit.ly/rcke25cfp" target="_blank" rel="noopener noreferrer"
                  className="text-md md:text-lg bg-purple-500 hover:bg-yellow-500 text-white py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Submit your Session
                </a> */}

                <a
                  href="https://bit.ly/rcke25adv" target="_blank" rel="noopener noreferrer"
                  className="text-md md:text-lg bg-purple-500 hover:bg-yellow-500 text-white py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Get Tickets Here
                </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
