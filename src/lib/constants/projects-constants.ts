import type { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    title: 'Chainalyze',
    description: `Chainalyze is a blockchain analytics platform that
            visualizes cryptocurrency transaction flows and wallet
            be interactive network graphs, real-time data monitoring, and
            customisable analytics dashboards. Users can track
            transaction patterns, identify key wallets, and generate
            detailed financial reports. The platform integrates
            multiple blockchain APIs to provide comprehensive coverage
            across major cryptocurrencies.`,
    image: '/images/projects/chainalyze-demo.png',
    techStack: [
      'TypeScript',
      'React',
      'Tailwind',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Vitest',
      'Supertest'
    ]
  },
  {
    title: 'birdy.ai',
    description: `Birdy.ai is a cryptocurrency data analysis platform that
            aggregates tweets from Twitter to provide users with
            valuable insights and trends from the crypto community.
            Powered by AI, it curates sentiment analysis to deliver
            actionable, accurate, and relevant information for
            informed decision-making.`,
    image: '/images/projects/birdy-ai-demo.png',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Supabase',
      'Vitest'
    ]
  },
  {
    title: 'Gigfinder',
    description: `Gigfinder is an intuitive event discovery platform that
            leverages the browser’s geolocation API to help users find upcoming
            events in their area. The app features detailed event information and
            allows users to save their favorite events for easy access. With its
            sleek, responsive design, Gigfinder makes exploring local entertainment
            both seamless and enjoyable.`,
    image: '/images/projects/gigfinder-demo.png',
    techStack: [
      'React',
      'TypeScript',
      'MongoDB',
      'Node.js',
      'Express.js',
      'Jest'
    ]
  }
];
