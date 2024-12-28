import Image from 'next/image';
import NavbarIcons from './navbar-icons';
import NavbarLinks from './navbar-links';

export default function Navbar() {
  return (
    <header className="fixed z-10 flex w-full flex-wrap items-center justify-evenly bg-navbar p-2 px-2 sm:p-2 md:p-2 lg:p-2">
      <Image
        height={70}
        width={350}
        src={'/images/full-logo.svg'}
        alt="Burt Software Solutions Logo"
        className="object-contain"
        priority
      />
      <nav className="flex items-center gap-8">
        <NavbarLinks />
        <NavbarIcons />
      </nav>
    </header>
  );
}
