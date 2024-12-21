import Card from '@/components/ui/card';
import SocialCard from './social-card';
import ContactForm from './contact-form';
import { Mail } from 'lucide-react';
import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons';

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
          <SocialCard
            SocialIcon={Mail}
            value="georgeeburt@icloud.com"
          />
          <SocialCard SocialIcon={SiGithub} value="georgeeburt" />
          <SocialCard SocialIcon={SiLinkedin} value="george-burt" />
        </div>
      </div>
    </Card>
  );
}
