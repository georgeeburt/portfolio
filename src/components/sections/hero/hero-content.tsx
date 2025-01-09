'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Typer from '@/components/sections/hero/typer';

export default function HeroContent() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { scrollY } = useScroll();

  // Wait for client-side hydration before enabling animations
  useEffect(() => {
    requestAnimationFrame(() => {
      setHasLoaded(true);
    });
  }, []);

  const opacity = useTransform(
    scrollY,
    [0, 150, 400, 800],
    [hasLoaded ? 1 : 0, 0.9, 0.6, 0],
    { clamp: false }
  );

  const y = useTransform(scrollY, [0, 800], [0, 100], {
    clamp: false
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -125 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 2,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{ opacity: hasLoaded ? opacity : 0, y }}
    >
      <h1 className="text-[2rem] font-bold md:text-[2.5rem] lg:text-[4rem]">
        Hello, I&apos;m{' '}
        <span className="bg-green-gradient bg-clip-text text-transparent">
          George Burt
        </span>
      </h1>
      <p className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem]">
        I&apos;m a Full-stack Developer specializing in
      </p>
      <p className="bg-green-gradient bg-clip-text text-[1.25rem] text-transparent md:text-[1.5rem] lg:text-[2rem]">
        <Typer />
      </p>
    </motion.div>
  );
}
