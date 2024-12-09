export interface ScheduledPost {
  id: string;
  date: Date;
  title: string;
  platform: string;
  content?: string;
  status?: 'draft' | 'scheduled' | 'published';
  time?: string;
}