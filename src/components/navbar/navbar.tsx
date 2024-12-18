import Image from 'next/image';
import NavbarIcons from './navbar-icons';
import NavbarLinks from './navbar-links';

export default function Navbar() {
  return (
    <header className="fixed flex flex-wrap bg-navbar w-full justify-evenly items-center sm:py-1 z-10 md:py-1 lg:py-1">
      <Image
        height={80}
        width={300}
        src={'/images/full-logo.svg'}
        alt="Burt Software Solutions Logo"
        className="object-contain"
        priority
      />
      <nav>
        <div className="flex items-center gap-8">
          <NavbarLinks />
          <NavbarIcons />
        </div>
      </nav>
    </header>
  );
}
