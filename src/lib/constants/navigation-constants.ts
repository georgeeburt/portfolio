import type { NavLink } from '@/types';
import type { SocialLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/georgeeburt',
    icon: '/icons/github.svg',
    label: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/george-burt/',
    icon: '/icons/linkedin.svg',
    label: 'LinkedIn'
  }
];
