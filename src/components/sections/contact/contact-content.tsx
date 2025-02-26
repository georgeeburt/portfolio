import Card from '@/components/ui/card';
import SocialCard from './social-card';
import ContactForm from './contact-form';
import { CONTACT_SOCIALS } from '@/lib/constants/contact-constants';
import { CONTACT_CONTENT } from '@/lib/constants/content-constants';

export default function ContactContent() {
  return (
    <Card>
      <h2 className="text-[3rem] font-semibold underline decoration-primary underline-offset-8">
        {CONTACT_CONTENT.title}
      </h2>
      {CONTACT_CONTENT.content.map((paragraph, index) => (
        <p key={paragraph.id || index}>{paragraph.text}</p>
      ))}
      <div className="flex flex-wrap justify-between gap-12 lg:flex">
        <ContactForm />
        <div className="flex flex-col flex-wrap gap-4">
          <h3 className="font-semibold">Connect with me</h3>
          {CONTACT_SOCIALS.map((social) => (
            <SocialCard
              key={social.href}
              iconUrl={social.icon}
              href={social.href}
              user={social.user}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
