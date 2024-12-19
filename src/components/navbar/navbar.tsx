import Image from 'next/image';
import NavbarIcons from './navbar-icons';
import NavbarLinks from './navbar-links';

export default function Navbar() {
  return (
    <header className="fixed flex flex-wrap bg-navbar w-full justify-evenly items-center px-2 p-2 sm:p-2 z-10 md:p-2 lg:p-2">
      <Image
        height={70}
        width={350}
        src={'/images/full-logo.svg'}
        alt="Burt Software Solutions Logo"
        className="object-contain"
        priority
      />
      <nav className='flex items-center gap-8'>
          <NavbarLinks />
          <NavbarIcons />
      </nav>
    </header>
  );
}
