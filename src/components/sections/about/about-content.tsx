import Card from '@/components/ui/card';
import { ABOUT_CONTENT } from '@/lib/constants/content-constants';

export default function AboutContent() {
  return (
    <Card>
      <h2 className="text-[3rem] font-semibold underline decoration-primary underline-offset-8">
        {ABOUT_CONTENT.title}
      </h2>
      {ABOUT_CONTENT.content.map((paragraph, index) => (
        <p key={paragraph.id || index}>{paragraph.text}</p>
      ))}
    </Card>
  );
}
