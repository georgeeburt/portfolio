import Container from '@/components/layout/container';
import HeroContent from '@/components/sections/hero/hero-content';
import AboutContent from '@/components/sections/about/about-content';
import SkillsContent from '@/components/sections/skills/skills-content';
import ScrollCue from '@/components/sections/hero/scroll-cue';
import ContactContent from '@/components/sections/contact/contact-content';
import ProjectsContent from '@/components/sections/projects/projects-content';

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
          <section id="projects" className="py-12 md:py-20">
            <ProjectsContent />
          </section>
          <section id="contact" className="py-12 md:py-20">
            <ContactContent />
          </section>
        </main>
      </Container>
    </>
  );
}
