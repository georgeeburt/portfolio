export interface SectionContent {
  title: string;
  content: {
    text: string;
    id?: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string | undefined;
}

export type Skill = {
  label: string;
  image: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  deployedUrl?: string;
};

export type Activity = {
  date: string;
  count: number;
  level: number;
};

export type ContributionDay = {
  date: string;
  contributionCount: number;
};

export type ContributionWeek = {
  contributionDays: ContributionDay[];
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
