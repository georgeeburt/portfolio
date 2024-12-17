import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '../../ui/navigation-menu';
import NavbarIcons from './navbar-icons';
import NavbarLinks from './navbar-links';

export default function Navbar() {
  return (
    <nav className="flex flex-wrap bg-navbar justify-evenly items-center py-1 px-4 lg:px-98 w-full">
      <Image
        height={80}
        width={300}
        src={'/images/full-logo.svg'}
        alt="Burt Software Solutions Logo"
        className="object-contain"
        priority
      />

      <div className="flex items-center gap-8 sm:16px lg:16px">
        <NavbarLinks />
        <NavbarIcons />
      </div>
    </nav>
  );
}
