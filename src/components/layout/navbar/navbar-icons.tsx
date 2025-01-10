import Link from 'next/link';
import Image from 'next/image';
import { SOCIAL_LINKS } from '@/lib/constants/navigation-constants';

export default function NavbarIcons() {
  return (
    <div className="flex items-center gap-4">
      {SOCIAL_LINKS.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          aria-label={`Visit my ${link.label} profile`}
          rel="noopener noreferrer"
          className="rounded-md"
        >
          <Image
            height={25}
            width={25}
            src={link.icon}
            alt={`${link.label} logo`}
            className="rounded-md hover:bg-white/10"
          />
        </Link>
      ))}
    </div>
  );
}
