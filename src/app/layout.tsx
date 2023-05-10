import './globals.css'
import { Krona_One } from 'next/font/google'



const kronaOne = Krona_One({
  weight: ['400'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'RenderconKe 2023 — The premier conference experience for Web and Mobile',
  description: 'RenderconKe 2023 is a conference for Web and Mobile developers. We bring together a diverse group of people from all across the world to share their knowledge and experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kronaOne.className}>{children}</body>
    </html>
  )
}
