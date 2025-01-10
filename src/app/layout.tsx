import Image from 'next/image';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Oxanium } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar/navbar';
import Footer from '@/components/layout/footer/footer';
import type { Metadata } from 'next';
import '../styles/globals.css';

const oxanium = Oxanium({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Burt Software Solutions',
  description:
    'Full-stack developer specialising in modern JavaScript technologies and Web3/Blockchain. Building scalable web applications with modern technologies.',
  keywords: [
    'full-stack developer',
    'full-stack engineer',
    'development',
    'typeScript',
    'react',
    'nextjs',
    'web development',
    'software engineer',
    'portfolio',
    'web3',
    'blockchain',
    'dev'
  ],
  authors: [
    { name: 'George Burt', url: 'https://burtsoftwaresolutions.dev' }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://burtsoftwaresolutions.dev',
    siteName: 'Burt Software Solutions',
    title: 'Burt Software Solutions',
    description:
      'Full-stack developer specialising in modern JavaScript technologies and Web3/Blockchain. Building scalable web applications with modern technologies.',
    images: [
      {
        url: '/images/logo-cover.png',
        width: 1320,
        height: 1000,
        alt: 'Burt Software Solutions logo'
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${oxanium.className} relative min-h-screen overflow-x-hidden bg-background text-foreground antialiased`}
        aria-hidden="true"
      >
        <div className="fixed inset-0 -z-10">
          <Image
            src="/images/backgrounds/bg-desktop.svg"
            alt=""
            fill
            priority
            className="hidden object-cover xs:block"
            role="presentation"
          />
          <Image
            src="/images/backgrounds/bg-mobile.svg"
            alt=""
            fill
            priority
            className="object-cover xs:hidden"
            role="presentation"
          />
        </div>
        <div className="relative z-0 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
