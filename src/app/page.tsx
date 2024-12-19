import Container from '@/components/container';
import HeroContent from '@/components/sections/hero/hero-content';
import AboutContent from '@/components/sections/about/about-content';
import SkillsContent from '@/components/sections/skills/skills-content';
import ScrollCue from '@/components/sections/hero/scroll-cue';

export default function RootContent() {
  return (
    <Container>
      <main>
        <section className="min-h-[calc(100vh-80px)] h-screen sticky top-0 pt-48">
          <HeroContent />
          <ScrollCue />
        </section>
        <section id="about" className="py-20">
          <AboutContent />
        </section>
        <section id="skills" className="py-20">
          <SkillsContent />
        </section>
      </main>
    </Container>
  );
}
