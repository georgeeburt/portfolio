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
    <NavigationMenu className="text-lg font-semibold">
      <NavigationMenuList className="mt-1 gap-4">
        {NAV_LINKS.map((link) => (
          <NavigationMenuItem
            className="duration-800 underline-offset-[6px] transition-colors hover:text-primary hover:underline"
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
