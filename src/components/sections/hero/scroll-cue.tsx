import { ChevronDown } from 'lucide-react';

export default function ScrollCue() {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col text-gray-600 items-center animate-pulse">
      <p className="lg:text-sm">Scroll Down</p>
      <ChevronDown className="w-5 h-5" />
    </div>
  );
}
