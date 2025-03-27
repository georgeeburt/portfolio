import Container from '@/components/layout/container';
import HeroContent from '@/components/sections/hero/hero-content';
import AboutContent from '@/components/sections/about/about-content';
import SkillsContent from '@/components/sections/skills/skills-content';
import ScrollCue from '@/components/sections/hero/scroll-cue';
import ContactContent from '@/components/sections/contact/contact-content';
import WorkContent from '@/components/sections/work/work-content';

export default function RootContent() {
  return (
    <>
      <Container>
        <main>
          <section className="sticky top-0 h-screen min-h-[calc(100vh-80px)] pt-48">
            <HeroContent />
            <ScrollCue />
          </section>
          <section id="about" className="py-12 md:py-20">
            <AboutContent />
          </section>
          <section id="skills" className="py-12 md:py-20">
            <SkillsContent />
          </section>
          <section id="work" className="py-12 md:py-20">
            <WorkContent />
          </section>
          <section id="contact" className="py-12 md:py-20">
            <ContactContent />
          </section>
        </main>
      </Container>
    </>
  );
}
