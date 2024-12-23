import Card from '@/components/ui/card';
import { PROJECTS } from '@/lib/constants/projects-constants';
import { Separator } from '@/components/ui/separator';
import ProjectCard from './project-card';

export default function ProjectsContent() {
  return (
    <Card>
      <h2 className="text-[2rem] md:text-[3rem] font-semibold text-center md:text-left">
        Projects
      </h2>
      <p className="text-center md:text-left">
        Explore a selection of projects I contributed to below:
      </p>
      <Separator className="my-6" />
      <div className="flex flex-col gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Card>
  );
}
