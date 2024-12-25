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
    <div className="hover:text-gray-500 cursor-pointer">
      <button onClick={scrollToTop} className="flex gap-1">
        <p>Back to top</p>
        <ChevronUp />
      </button>
    </div>
  );
}
