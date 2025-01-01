import ScrollToTopButton from './scroll-to-top-button';

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-evenly gap-3 border-t border-white/10 bg-white/5 py-6 text-muted md:flex-row">
      <p>
        &copy; {new Date().getFullYear()} George Burt. All rights
        reserved.
      </p>
      <ScrollToTopButton />
    </footer>
  );
}
