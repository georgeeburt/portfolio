import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '../../ui/navigation-menu';
import { NAV_LINKS } from '@/lib/constants/navigation-constants';

export default function NavbarLinks() {
  return (
    <NavigationMenu className="text-lg font-medium">
      <NavigationMenuList className="gap-4">
        {NAV_LINKS.map((link) => (
          <NavigationMenuItem
            className="hover:text-accent"
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
