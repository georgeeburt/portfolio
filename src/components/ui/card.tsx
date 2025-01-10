'use client';

import { motion } from 'framer-motion';

export default function Card({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ x: -125, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.33, 1, 0.68, 1]
      }}
      viewport={{
        amount: 0.01
      }}
      className="relative flex flex-col gap-8 rounded-lg border border-white/10 bg-card px-8 py-8 shadow-lg backdrop-blur-md"
    >
      {children}
    </motion.section>
  );
}
