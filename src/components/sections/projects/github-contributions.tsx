'use client';

import { useState, useEffect } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';
import { Tooltip as MuiTooltip } from '@mui/material';
import fetchContributions from '@/lib/utils/fetch-contributions';
import type { Activity } from '@/types/index';

export default function GithubContributions() {
  const [contributions, setContributions] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContributions() {
      try {
        const data = await fetchContributions();
        setContributions(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch contributions', error);
      }
    }
    loadContributions();
  }, []);
  return (
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
  );
}
