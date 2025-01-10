import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SocialCard({
  iconUrl,
  href,
  user
}: {
  iconUrl: string;
  href: string;
  user: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      passHref
    >
      <div className="flex cursor-pointer gap-3 rounded-lg border border-primary-border bg-primary p-2 font-semibold text-primary-foreground hover:bg-secondary">
        <div className="brightness-0 saturate-0">
          <Image src={iconUrl} width={24} height={24} alt={user} />
        </div>
        <p>{user}</p>
      </div>
    </Link>
  );
}
