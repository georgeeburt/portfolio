import Card from '@/components/ui/card';
import SocialCard from './social-card';
import ContactForm from './contact-form';
import { contactSocials } from '@/lib/constants/contact-constants';

export default function ContactContent() {
  return (
    <Card>
      <h2 className="text-[3rem] font-semibold">Contact</h2>
      <p>
        Looking to collaborate? Feel free to get in touch using the
        form or connect with me through my socials below:
      </p>
      <div className="flex flex-wrap lg:flex justify-between gap-12">
        <ContactForm />
        <div className="flex flex-col flex-wrap gap-4">
          <h3 className="font-semibold">Connect with me</h3>
          {contactSocials.map((social) => (
            <SocialCard
              key={social.href}
              SocialIcon={social.Icon}
              href={social.href}
              user={social.user}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
