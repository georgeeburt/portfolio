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
    <button
      onClick={scrollToTop}
      className="relative flex cursor-pointer items-center gap-1 hover:text-muted-active"
    >
      <span>Back to top</span>
      <ChevronUp className="h-4 w-4" />
    </button>
  );
}
