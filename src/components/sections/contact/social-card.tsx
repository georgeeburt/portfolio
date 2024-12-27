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
      <div className="flex bg-primary/10 cursor-pointer gap-3 p-2 rounded-lg border border-white/10 hover:bg-primary/30">
        <SocialIcon />
        <p>{user}</p>
      </div>
    </Link>
  );
}
