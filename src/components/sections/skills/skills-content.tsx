import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/ui/card';
import { SKILLS } from '@/lib/constants/skills-constants';

export default function SkillsContent() {
  return (
    <Card>
      <h2 className="text-[3rem] font-semibold">Skills</h2>
      <h3 className="text-[1.5rem] font-semibold">Tech Stack</h3>
      <div className="flex flex-wrap gap-4 justify-evenly items-center">
        {Object.values(SKILLS).map((skill) => (
          <Link href={skill.docsUrl} target="_blank" rel="noopener noreferrer" key={skill.label}>
            <Image
              height={30}
              width={30}
              src={skill.image}
              alt={`${skill.label} logo`}
            />
          </Link>
        ))}
      </div>
    </Card>
  );
}
