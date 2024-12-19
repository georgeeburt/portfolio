import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/lib/constants/navigation-constants';

export default function NavbarIcons() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          aria-label={`Visit my ${link.label} profile`}
          className='hover:bg-primary rounded-md'
        >
          <Image
            height={25}
            width={25}
            src={link.icon}
            alt={`${link.label} logo`}
          />
        </Link>
      ))}
    </div>
  );
}
