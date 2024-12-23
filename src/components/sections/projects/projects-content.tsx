import Card from '@/components/ui/card';
import { PROJECTS } from '@/lib/constants/projects-constants';
import { Separator } from '@/components/ui/separator';
import ProjectCard from './project-card';

export default function ProjectsContent() {
  return (
    <Card>
      <h2 className="text-[3rem] font-semibold">Projects</h2>
      <p>Explore a selection of projects I contributed to below:</p>
      <Separator />
      <div className="flex flex-wrap gap-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Card>
  );
}
