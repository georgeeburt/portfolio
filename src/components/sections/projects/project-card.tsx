import Image from 'next/image';
import type { Project } from '@/types';

export default function ProjectCard({
  project
}: Readonly<{ project: Project }>) {
  const { title, description, image, techStack } = project;
  return (
    <article className="flex h-full flex-col items-center rounded-lg border border-white/10">
      <Image
        height={175}
        width={175}
        src={image}
        alt={`${title} image`}
        className="mb-3 mt-5 object-contain md:h-[200px] md:w-[200px]"
      />
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-[1.5rem] font-semibold md:text-left md:text-[1.75rem]">
          {title}
        </h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
      <div className="flex w-full flex-wrap gap-2 rounded-bl-lg rounded-br-lg border-t border-white/10 bg-card p-6">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-primary/20 px-2 py-1 text-xs font-semibold text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
