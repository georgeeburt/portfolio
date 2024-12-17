import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from '../../ui/navigation-menu';

export default function NavbarLinks() {
  return (
    <NavigationMenu className="text-lg font-medium">
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink>Projects</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink>About</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink>Skills</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="" legacyBehavior passHref>
            <NavigationMenuLink>Contact</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
