'use client';

import { motion } from 'framer-motion';

export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.33, 1, 0.68, 1],
      }}
      viewport={{
        margin: '-100px',
      }}
      className="flex flex-col py-8 px-8 relative rounded-lg backdrop-blur-md bg-white/[3%] border border-white/10 shadow-lg"
    >
      {children}
    </motion.section>
  );
}
