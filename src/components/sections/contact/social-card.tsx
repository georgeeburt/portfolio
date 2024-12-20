import React from 'react';

export default function SocialCard({
  SocialIcon,
  value,
}: {
  SocialIcon: React.ComponentType;
  value: string;
}) {
  return (
    <div className="flex cursor-pointer gap-3 p-2 rounded-lg border border-white/10">
      <SocialIcon />
      <p>{value}</p>
    </div>
  );
}
