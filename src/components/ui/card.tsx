'use client';

import { motion } from 'framer-motion';
import { useIsMobile } from '@/lib/hooks/use-mobile';

export default function Card({
  children
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  return (
    <motion.section
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        duration: isMobile ? 1 : 1.5,
        ease: [0.4, 0, 0.2, 1]
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
