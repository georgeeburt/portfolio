import Image from 'next/image';
import type { Project } from '@/types';

export default function ProjectCard({
  project
}: Readonly<{ project: Project }>) {
  const { title, description, image, demo, deployedUrl } = project;
  return (
    <article className="flex items-center gap-8 bg-purple-900/10 border border-white/10 rounded-lg p-6">
      <Image
        height={200}
        width={200}
        src={image}
        alt={`${title} image`}
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-[1.75rem] font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
