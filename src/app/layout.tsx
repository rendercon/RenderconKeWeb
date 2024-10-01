import './globals.css';
import { Krona_One } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ScheduleProvider } from './context/ScheduleContext';

const kronaOne = Krona_One({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata = {
  type: 'website',
  locale: 'en_US',
  url: 'https://renderconke.org',
  site_name: 'Rendercon Kenya',
  title: 'RenderconKe 2024 — The premier conference experience for Web and Mobile',
  description: 'RenderconKe 2024 is a conference for Web and Mobile developers. We bring together a diverse group of people from all across the world to share their knowledge and experience.',
  image: 'https://res.cloudinary.com/djgfcdjgn/image/upload/v1711373281/rendercon_24_sessionize_banner_s00r58.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={'!scroll-smooth'}>
      <body className={kronaOne.className}>
        <ScheduleProvider> {/* Wrap the children with ScheduleProvider */}
          {children}
        </ScheduleProvider>
        <Analytics />
      </body>
    </html>
  );
}
