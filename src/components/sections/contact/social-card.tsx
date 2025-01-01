import React from 'react';
import Link from 'next/link';

export default function SocialCard({
  SocialIcon,
  href,
  user
}: {
  SocialIcon: React.ComponentType;
  href: string;
  user: string;
}) {
  return (
    <Link href={href} target="_blank">
      <div className="flex cursor-pointer gap-3 rounded-lg border border-white/10 bg-primary p-2 font-semibold text-primary-foreground hover:bg-secondary">
        <SocialIcon />
        <p>{user}</p>
      </div>
    </Link>
  );
}
