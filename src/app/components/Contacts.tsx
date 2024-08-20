import React from 'react'

type Props = {}

const Contacts = (props: Props) => {
  return (
    <div className="px-6" id="contacts">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-bold text-slate-200 sm:text-3xl sm:tracking-tight">Get in touch</h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-slate-100">More Information</h3>
                <dl className="mt-2 text-base text-slate-300">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <a href="mailto: info@rendercon.org" className='hover:underline hover:text-[#eee712]'>info@rendercon.org</a>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-slate-100">Youtube</h3>
                <dl className="mt-2 text-base text-slate-300">
                  <div>
                    <dt className="sr-only">Youtube Link</dt>
                    <dd className='font-mono text-xl'>
                      <a 
                        href="https://www.youtube.com/channel/UC0bCcG8gHUL4njDOpQGcMIA" 
                        className="hover:text-[#eee712] hover:underline" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        RenderconORG
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-slate-100">X (Twitter)</h3>
                <dl className="mt-2 text-base text-slate-300">
                  <div>
                    <dt className="sr-only">Twitter Handle</dt>
                    <dd className='font-mono text-xl'>
                      <a 
                        href="https://twitter.com/renderconke" 
                        className="hover:text-[#eee712] hover:underline" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        @renderconke
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-slate-100">LinkedIn</h3>
                <dl className="mt-2 text-base text-slate-300">
                  <div>
                    <dt className="sr-only">Linkedin</dt>
                    <dd className='font-mono text-xl'>
                      <a 
                        href="https://www.linkedin.com/company/renderconke/" 
                        className="hover:text-[#eee712] hover:underline"  
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Rendercon Kenya
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts;
