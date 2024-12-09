import { CalendarPost } from './types';

export const INITIAL_POSTS: CalendarPost[] = [
  {
    id: 'post-1',
    platform: 'LinkedIn',
    time: '09:00',
    title: 'Product Launch Announcement',
    day: 15,
    color: 'bg-blue-50 dark:bg-blue-950/50',
  },
  {
    id: 'post-2',
    platform: 'Twitter',
    time: '14:00',
    title: 'Tech Stack Deep Dive',
    day: 15,
    color: 'bg-sky-50 dark:bg-sky-950/50',
  },
];

export const ADDITIONAL_POSTS: CalendarPost[] = [
  {
    id: 'post-3',
    platform: 'LinkedIn',
    time: '10:30',
    title: 'Weekly Developer Tips Newsletter',
    day: 18,
    color: 'bg-indigo-50 dark:bg-indigo-950/50',
  },
  {
    id: 'post-4',
    platform: 'Twitter',
    time: '11:00',
    title: 'Community Spotlight',
    day: 20,
    color: 'bg-violet-50 dark:bg-violet-950/50',
  },
  {
    id: 'post-5',
    platform: 'LinkedIn',
    time: '13:00',
    title: 'Industry Insights Report',
    day: 22,
    color: 'bg-purple-50 dark:bg-purple-950/50',
  },
  {
    id: 'post-6',
    platform: 'Twitter',
    time: '15:30',
    title: 'Product Feature Preview',
    day: 25,
    color: 'bg-cyan-50 dark:bg-cyan-950/50',
  },
];