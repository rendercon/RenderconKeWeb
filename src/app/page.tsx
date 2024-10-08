import { Source_Code_Pro } from 'next/font/google'

import Head from 'next/head'
import { Header } from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Sponsors from './components/Sponsors'
import { Speakers } from './components/Speakers'
import Partners from './components/Partners'
import Contacts from './components/Contacts'
import Technologies from './components/Technologies'
import Community from './components/Community'

const sourceCodePro = Source_Code_Pro({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
    <Head>
      <title>RenderconKe 2025 — The premier conference experience for Web and Mobile</title>
      <meta name="description" content="RenderconKe 2025 is a conference for Web and Mobile developers. We bring together a diverse group of people from all across the world to share their knowledge and experience." />
    </Head>
    
    <Header />
    <main>
      <div id="home"></div>
      <Hero />
      <Technologies />
      <Speakers />
      <Community />
      <Sponsors />
      <Partners />
    </main>
    <Footer />
    </>
  )
}
