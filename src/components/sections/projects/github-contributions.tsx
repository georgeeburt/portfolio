'use client';

import { useState, useEffect } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';
import { Tooltip as MuiTooltip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import type { Activity } from '@/types/index';

export default function GithubContributions() {
  const [contributions, setContributions] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContributions() {
      try {
        const response = await fetch('/api/contributions');
        const data = await response.json();
        setContributions(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch contributions', error);
      }
    }
    loadContributions();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary">
          <div className="w-max">
            <ActivityCalendar
              data={contributions}
              loading={isLoading}
              weekStart={1}
              blockSize={12}
              blockMargin={6}
              renderBlock={(block, contribution) => (
                <MuiTooltip
                  title={`${contribution.count} contributions on ${contribution.date}`}
                  followCursor={true}
                  arrow={true}
                >
                  {block}
                </MuiTooltip>
              )}
              labels={{
                totalCount: `{{count}} contributions in ${new Date().getFullYear() - 1} & ${new Date().getFullYear()}`
              }}
              colorScheme="dark"
              theme={{
                dark: ['#3b3b3b', '#7affa7']
              }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
