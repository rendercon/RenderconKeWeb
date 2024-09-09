import React from 'react'
import { Button } from './Button'
import Link from 'next/link'


const Community = () => {
  return (
    <section className="mt-10 overflow-hidden sm:mt-10">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="font-display text-4xl font-medium tracking-tighter text-slate-200 sm:text-5xl">Our Community</h2>
                <p className="mt-4 font-mono text-2xl tracking-tight leading-8 text-slate-300">
                  A conference experience is only as good as the community that attends it. We are proud to have a diverse community of developers, designers, and tech enthusiasts from all across the world.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src="https://res.cloudinary.com/djgfcdjgn/image/upload/v1708514361/RKY_4305_1_jnwhup.jpg"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src="https://res.cloudinary.com/djgfcdjgn/image/upload/v1708514436/RKY_4577_1_atxxpn.jpg"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src="https://res.cloudinary.com/djgfcdjgn/image/upload/v1708514435/RKY_4568_2_ip3kqg.jpg"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src="https://res.cloudinary.com/djgfcdjgn/image/upload/v1708514336/RKY_4278_ykmh6p.jpg"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-center mt-12 gap-12 mx-8' >
            <Button className='max-w-lg flex justify-center align-middle items-center mx-auto'>
              <Link 
                href="https://bit.ly/rcke23pics" target="_blank" rel="noopener noreferrer">View Gallery</Link>
            </Button>
          </div>
        </section>
  )
}

export default Community