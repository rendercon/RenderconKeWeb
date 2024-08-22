import './globals.css'
import { Krona_One } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'



const kronaOne = Krona_One({
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata = {
    type: 'website',
    locale: 'en_US',
    url: 'https://renderconke.org',
    site_name: 'Rendercon Kenya',
    title: 'RenderconKe 2024 — The premier conference experience for Web and Mobile',
    description: 'RenderconKe 2024 is a conference for Web and Mobile developers. We bring together a diverse group of people from all across the world to share their knowledge and experience.',
    image: 'https://res.cloudinary.com/djgfcdjgn/image/upload/v1711373281/rendercon_24_sessionize_banner_s00r58.png',    
}

// const gradientStyle = {
//   width: '100%',
//   height: '100vh',
//   background: 'linear-gradient(45deg, #10002b, #240046)',
//   backgroundSize: '400% 400%',
//   animation: 'gradientAnimation 10s ease infinite',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={'!scroll-smooth'}>
      <body className={kronaOne.className} 
      // style={gradientStyle}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
