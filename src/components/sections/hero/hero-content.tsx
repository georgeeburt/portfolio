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
      <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[4rem] font-bold">
        Hello, my name is{' '}
        <span className="bg-purple-gradient text-transparent bg-clip-text">
          George
        </span>
      </h1>
      <p className="text-[1.25rem] md:text-[1.5rem] lg:text-[2rem]">
        I'm a Full-stack Developer proficient in
      </p>
      <p className="bg-purple-gradient text-[1.25rem] text-transparent bg-clip-text md:text-[1.5rem] lg:text-[2rem]">
        <Typer />
      </p>
    </motion.div>
  );
}