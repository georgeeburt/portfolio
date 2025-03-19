import NavbarLogo from './navbar-logo';
import NavbarIcons from './navbar-icons';
import NavbarLinks from './navbar-links';

export default function Navbar() {
  return (
    <header className="fixed z-10 flex w-full flex-wrap items-center justify-evenly bg-navbar p-2 px-2 sm:p-2 md:p-2 lg:p-2">
      <NavbarLogo />
      <nav className="flex gap-8">
        <NavbarLinks />
        <NavbarIcons />
      </nav>
    </header>
  );
}
