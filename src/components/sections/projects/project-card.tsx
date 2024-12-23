import Image from 'next/image';
import type { Project } from '@/types';

export default function ProjectCard({
  project
}: Readonly<{ project: Project }>) {
  const { title, description, image } = project;
  return (
    <article className="flex flex-col md:flex-row items-center gap-8 bg-purple-900/10 border border-white/10 rounded-lg p-6">
      <Image
        height={200}
        width={200}
        src={image}
        alt={`${title} image`}
        className="w-48 h-48 object-contain md:w-[200px] md:h-[200px]"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-[1.5rem] md:text-[1.75rem] font-semibold text-center md:text-left">
          {title}
        </h3>
        <p className="text-sm md:text-base text-center md:text-left">
          {description}
        </p>
      </div>
    </article>
  );
}
