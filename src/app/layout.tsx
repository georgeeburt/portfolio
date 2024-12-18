import Navbar from '@/components/navbar/navbar';
import { Oxanium } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

const oxanium = Oxanium({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Burt Software Solutions',
  description:
    'Professional software development and consulting services for modern businesses',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oxanium.className} overflow-x-hidden antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
