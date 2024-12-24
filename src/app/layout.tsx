import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Oxanium } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar/navbar';
import BlurBackground from '@/components/blur-background';
import type { Metadata } from 'next';
import './globals.css';

const oxanium = Oxanium({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Burt Software Solutions',
  description:
    'Professional software development and consulting services for modern businesses'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oxanium.className} overflow-x-hidden antialiased`}
      >
        <BlurBackground />
        <Navbar />
        {children}
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
