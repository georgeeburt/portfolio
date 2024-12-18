import Container from '@/components/container';
import AboutContent from '@/components/sections/about/about-content';
import HeroContent from '@/components/sections/hero-section/hero-content';
import ScrollCue from '@/components/sections/hero-section/scroll-cue';

export default function RootContent() {
  return (
    <Container>
      <main>
        <section className="min-h-[calc(100vh-80px)] sticky top-0 pt-48">
          <HeroContent />
          <ScrollCue />
        </section>
        <section>
          <AboutContent />
        </section>
      </main>
    </Container>
  );
}
