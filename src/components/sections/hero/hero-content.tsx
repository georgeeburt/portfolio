'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Typer from '@/components/sections/hero/typer';

export default function HeroContent() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    // Delay to ensure smooth initial animation
    const timeout = setTimeout(() => {
      setHasLoaded(true);
    }, 5);

    return () => clearTimeout(timeout);
  }, []);

  // Scroll-based transformations
  const scrollOpacity = useTransform(
    scrollY,
    [0, 150, 400, 800],
    [1, 0.9, 0.6, 0],
    { clamp: false }
  );

  const y = useTransform(scrollY, [0, 800], [0, 100], {
    clamp: false
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -125 }}
      animate={{
        opacity: hasLoaded ? 1 : 0,
        x: hasLoaded ? 0 : -125
      }}
      transition={{
        duration: 1.5,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <motion.div style={{ opacity: scrollOpacity, y }}>
        <h1 className="text-[2rem] font-bold md:text-[2.5rem] lg:text-[4rem]">
          Hi, I&apos;m{' '}
          <span className="bg-green-gradient bg-clip-text text-transparent">
            George Burt
          </span>
        </h1>
        <p className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem]">
          I&apos;m a Full-stack Developer specialising in
        </p>
        <p className="bg-green-gradient bg-clip-text text-[1.25rem] text-transparent md:text-[1.5rem] lg:text-[2rem]">
          <Typer />
        </p>
      </motion.div>
    </motion.div>
  );
}
