import React from 'react'
import Head from 'next/head'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import AboutUs from '../components/About'
import Organisers from '../components/Organisers'
import Technologies from '../components/Technologies'

export default function About() {
    
  return (
    <>
        <Head>
            <title>RenderconKe 2024 — About us</title>
            <meta name="description" content="RenderconKe 2024 is a conference for Web and Mobile developers. Here is the about us page. Get to know us" />
        </Head>

        <Header />
        <main className={'min-h-[800px]'}>
            <AboutUs/>
            <Technologies/>
            <br />
            <br />
            <Organisers/>
        </main>
        <Footer />
    </>
  )
}
