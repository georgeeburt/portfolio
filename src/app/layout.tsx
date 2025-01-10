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
    'Professional software development and consulting services for modern businesses'
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
      >
        <div className="fixed inset-0 -z-10">
          <Image
            src="/bg-desktop.svg"
            alt="Background"
            fill
            priority
            className="hidden object-cover xs:block"
          />
          <Image
            src="/bg-mobile.svg"
            alt="Background"
            fill
            priority
            className="object-cover xs:hidden"
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
