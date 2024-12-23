export type Skill = {
  label: string;
  image: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  demo?: string;
  deployedUrl?: string;
};

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  icon: string;
  label: string;
};
