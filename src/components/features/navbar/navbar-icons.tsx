import Link from 'next/link';
import Image from 'next/image';

export default function NavbarIcons() {
  return (
    <div className="flex gap-4">
      <Link
        href="https://github.com/georgeeburt"
        target="_blank"
        aria-label="Visit my GitHub profile"
      >
        <Image
          height={25}
          width={25}
          src="/icons/github.svg"
          alt="GitHub logo"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/george-burt/"
        target="_blank"
        aria-label="Visit my LinkedIn profile"
      >
        <Image
          height={25}
          width={25}
          src="/icons/linkedin.svg"
          alt="LinkedIn logo"
        />
      </Link>
    </div>
  );
}
