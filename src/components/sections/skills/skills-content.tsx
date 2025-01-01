import Link from 'next/link';
import Image from 'next/image';
import Tooltip from './tooltip';
import Card from '@/components/ui/card';
import Marquee from 'react-fast-marquee';
import { Separator } from '@/components/ui/separator';
import { SKILLS_CONTENT } from '@/lib/constants/content-constants';
import {
  SKILLS,
  SECONDARY_SKILLS
} from '@/lib/constants/skills-constants';

export default function SkillsContent() {
  return (
    <Card>
      <h2 className="text-[3rem] font-semibold">
        {SKILLS_CONTENT.title}
      </h2>
      {SKILLS_CONTENT.content.map((paragraph, index) => (
        <p key={paragraph.id || index}>{paragraph.text}</p>
      ))}
      <h3 className="text-[1.5rem] font-semibold">Tech Stack</h3>

      <div>
        <Marquee
          speed={65}
          pauseOnHover={true}
          gradient={false}
          className="h-28"
        >
          <div className="flex w-full min-w-[100vw] items-center justify-evenly">
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
                <Tooltip label={skill.label} />
              </Link>
            ))}
          </div>
        </Marquee>
      </div>
      <Separator />
      <h3 className="text-[1.5rem] font-semibold">
        Secondary Skills
      </h3>
      <div className="flex flex-wrap items-center justify-around gap-4">
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
            <Tooltip label={skill.label} />
          </Link>
        ))}
      </div>
    </Card>
  );
}
