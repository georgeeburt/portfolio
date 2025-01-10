import Card from '@/components/ui/card';
import { PROJECTS } from '@/lib/constants/projects-constants';
import { Separator } from '@/components/ui/separator';
import ProjectCard from './project-card';
import { PROJECTS_CONTENT } from '@/lib/constants/content-constants';
import GithubContributions from './github-contributions';

export default function ProjectsContent() {
  return (
    <Card>
      <h2 className="text-[3rem] font-semibold underline decoration-primary underline-offset-8">
        {PROJECTS_CONTENT.title}
      </h2>
      {PROJECTS_CONTENT.content.map((paragraph, index) => (
        <p key={paragraph.id || index}>{paragraph.text}</p>
      ))}
      <Separator />
      <div className="m-2 flex flex-col gap-16">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <Separator />
      <div data-testid="contributions">
        <h2 className="text-[1.5rem] font-semibold underline decoration-primary underline-offset-8 md:text-left md:text-[1.75rem]">
          Contributions
        </h2>
        <GithubContributions />
      </div>
    </Card>
  );
}
