'use client';

import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="cursor-pointer hover:text-gray-500">
      <button onClick={scrollToTop} className="flex gap-1">
        <p>Back to top</p>
        <ChevronUp />
      </button>
    </div>
  );
}
