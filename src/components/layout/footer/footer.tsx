import ScrollToTopButton from './scroll-to-top-button';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-3 items-center justify-evenly w-full py-6 text-gray-600 border-t border-white/10 bg-white/5">
      <p>&copy; 2024 George Burt. All rights reserved.</p>
      <ScrollToTopButton />
    </footer>
  );
}
