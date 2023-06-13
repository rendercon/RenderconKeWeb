import { Source_Code_Pro } from 'next/font/google'

import Head from 'next/head'
import { Header } from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Sponsors from './components/Sponsors'
import { Speakers } from './components/Speakers'
import Partners from './components/Partners'
import Contacts from './components/Contacts'

const sourceCodePro = Source_Code_Pro({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
    <Head>
      <title>RenderconKe 2023 — The premier conference experience for Web and Mobile</title>
      <meta name="description" content="RenderconKe 2023 is a conference for Web and Mobile developers. We bring together a diverse group of people from all across the world to share their knowledge and experience." />
    </Head>
    
    <Header />
    <main>
      <Hero />
      <Speakers />
      <Sponsors />
      <Partners />
      <Contacts />
    </main>
    <Footer />
    {/* <main className="flex min-h-screen flex-col items-center p-24">
      <h1
        className="text-6xl font-bold text-center text-stone-50 pb-10"
      >RenderconKe 2023
      </h1>
      <p
        className={`text-2xl font-medium text-center text-stone-50 ${sourceCodePro.className}`}
      >Initializing...
      </p>
    </main> */}
    </>
  )
}
