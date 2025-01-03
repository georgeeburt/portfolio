'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function Typer() {
  const words = [
    'TypeScript & JavaScript',
    'Front-end & Back-end development',
    'React & Next.js',
    'Web3 & Blockchain'
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
