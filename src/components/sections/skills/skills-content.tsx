import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/ui/card';
import {
  SKILLS,
  SECONDARY_SKILLS
} from '@/lib/constants/skills-constants';
import Marquee from 'react-fast-marquee';
import { Separator } from '@/components/ui/separator';

export default function SkillsContent() {
  const intro = `My journey with coding first began during my secondary school years, where I first discovered my passion for programming through Computer Science and Python.`;
  return (
    <Card>
      <h2 className="text-[3rem] font-semibold">Skills</h2>
      <p>{intro}</p>
      <h3 className="text-[1.5rem] font-semibold">Tech Stack</h3>

      <div>
        <Marquee
          speed={65}
          pauseOnHover={true}
          gradient={false}
          className="h-28"
        >
          <div className="flex justify-evenly items-center w-full min-w-[100vw]">
            {Object.values(SKILLS).map((skill) => (
              <Link
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                key={skill.label}
                className="group relative mx-4"
              >
                <Image
                  height={40}
                  width={40}
                  src={skill.image}
                  alt={`${skill.label} logo`}
                />
                <span
                  className="absolute left-1/2 -translate-x-1/2 -bottom-8
                 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                 bg-black/60 text-white text-sm rounded px-2 py-1 whitespace-nowrap"
                >
                  {skill.label}
                </span>
              </Link>
            ))}
          </div>
        </Marquee>
      </div>
      <Separator />
      <h3 className="text-[1.5rem] font-semibold">
        Secondary Skills
      </h3>
      <div className="flex flex-wrap gap-4 justify-around items-center">
        {Object.values(SECONDARY_SKILLS).map((skill) => (
          <Link
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            key={skill.label}
            className="group relative"
          >
            <Image
              height={40}
              width={40}
              src={skill.image}
              alt={`${skill.label} logo`}
            />
            <span
              className="absolute left-1/2 -translate-x-1/2 -bottom-8
             opacity-0 group-hover:opacity-100 transition-opacity duration-300
             bg-black/80 text-white text-sm rounded px-2 py-1 whitespace-nowrap"
            >
              {skill.label}
            </span>
          </Link>
        ))}
      </div>
    </Card>
  );
}
