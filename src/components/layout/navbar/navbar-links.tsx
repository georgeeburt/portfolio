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
            className="duration-800 transition-colors hover:text-primary"
            key={link.label}
          >
            <NavigationMenuLink asChild>
              <Link href={link.href}>{link.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
