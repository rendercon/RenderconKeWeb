import './globals.css';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ScheduleProvider } from './context/ScheduleContext';
import { ScrollToTop } from './components/ScrollToTop';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://rendercon.org'),
  title: 'RenderCon Kenya 2026 — East Africa\'s React Conference',
  description: 'RenderCon Kenya is East Africa\'s community-first React conference. React. Connect. Build. Join 200+ developers, designers, and engineers at Nairobi\'s premier frontend conference.',
  keywords: ['React', 'React Native', 'conference', 'Kenya', 'East Africa', 'frontend', 'JavaScript', 'TypeScript', 'developer conference'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rendercon.org',
    siteName: 'RenderCon Kenya',
    title: 'RenderCon Kenya 2026 — East Africa\'s React Conference',
    description: 'React. Connect. Build. East Africa\'s community-first React conference by ReactDevsKe.',
    images: [
      {
        url: 'https://res.cloudinary.com/djgfcdjgn/image/upload/v1711373281/rendercon_24_sessionize_banner_s00r58.png',
        width: 1200,
        height: 630,
        alt: 'RenderCon Kenya 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RenderCon Kenya 2026',
    description: 'East Africa\'s community-first React conference. React. Connect. Build.',
    site: '@ReactDevsKe',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} !scroll-smooth`}>
      <body className={poppins.className}>
        <ScrollToTop />
        <ScheduleProvider>
          {children}
        </ScheduleProvider>
        <Analytics />
      </body>
    </html>
  );
}
