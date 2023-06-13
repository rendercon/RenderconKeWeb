import React from 'react'

type Props = {}

const Contacts = (props: Props) => {
  return (
    <div className="bg-slate">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="divide-y-2 divide-gray-200">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <h2 className="text-2xl font-bold text-slate-200 sm:text-3xl sm:tracking-tight">Get in touch</h2>
            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
              <div>
                <h3 className="text-lg font-medium leading-6 text-slate-200">More Information</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd className='font-mono text-xl'>info@rendercon.org</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-slate-200">Partnerships</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd className='font-mono text-xl'>partnerships@rendercon.org</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-slate-200">Twitter</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Twitter Handle</dt>
                    <dd className='font-mono text-xl'>@renderconke</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium leading-6 text-slate-200">LinkedIn</h3>
                <dl className="mt-2 text-base text-gray-500">
                  <div>
                    <dt className="sr-only">Linkedin</dt>
                    <dd className='font-mono text-xl'>Rendercon Kenya</dd>
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