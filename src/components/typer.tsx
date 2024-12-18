'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function Typer() {
  const words = [
    'TypeScript & JavaScript',
    'React & Next.js',
    'Front-end & Back-end development',
    'Web3',
  ];
  return (
    <Typewriter
      cursor
      typeSpeed={50}
      deleteSpeed={40}
      delaySpeed={3000}
      loop={0}
      words={words}
    />
  );
}
