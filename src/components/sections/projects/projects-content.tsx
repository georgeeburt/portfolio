import Card from '@/components/ui/card';
import { PROJECTS } from '@/lib/constants/projects-constants';
import { Separator } from '@/components/ui/separator';
import ProjectCard from './project-card';
import { PROJECTS_CONTENT } from '@/lib/constants/content-constants';

export default function ProjectsContent() {
  return (
    <Card>
      <h2 className="text-[2rem] md:text-[3rem] font-semibold text-center md:text-left">
        {PROJECTS_CONTENT.title}
      </h2>
      {PROJECTS_CONTENT.content.map((paragraph, index) => (
        <p key={paragraph.id || index}>{paragraph.text}</p>
      ))}
      <Separator className="my-6" />
      <div className="flex flex-col gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Card>
  );
}
