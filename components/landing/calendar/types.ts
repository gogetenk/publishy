export interface CalendarPost {
  id: string;
  platform: 'LinkedIn' | 'Twitter' | 'Instagram' | 'Newsletter';
  time: string;
  title: string;
  day: number;
  color: string;
}

export interface CalendarDay {
  dayNumber: number;
  posts: CalendarPost[];
}