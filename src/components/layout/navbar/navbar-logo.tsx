'use client';

import Image from 'next/image';

export default function NavbarLogo() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Image
      height={70}
      width={350}
      src={'/images/full-logo.svg'}
      alt="Burt Software Solutions Logo"
      onClick={scrollToTop}
      className="object-contain hover:cursor-pointer"
      priority
    />
  );
}
