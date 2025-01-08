import type { Activity } from '@/types';

export default async function fetchContributions(): Promise<
  Activity[]
> {
  const response = await fetch('/contributions', {
    method: 'GET'
  });
  if (!response.ok) {
    throw new Error('Failed to fetch contributions');
  }
  return response.json();
}
