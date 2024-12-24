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
        amount: 0.2
      }}
      className="flex flex-col gap-8 py-8 px-8 relative rounded-lg backdrop-blur-md bg-white/[5%] border border-white/10 shadow-lg"
    >
      {children}
    </motion.section>
  );
}
