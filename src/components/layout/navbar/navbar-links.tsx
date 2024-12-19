import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '../../ui/navigation-menu';
import { navLinks } from '@/lib/constants/navigation-constants';

export default function NavbarLinks() {
  return (
    <NavigationMenu className="text-lg font-medium">
      <NavigationMenuList className="gap-4">
        {navLinks.map((link) => (
          <NavigationMenuItem
            className="hover:text-muted"
            key={link.label}
          >
            <Link href={link.href} legacyBehavior passHref>
              <NavigationMenuLink>{link.label}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
