export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'archived';
  platforms: string[];
  createdAt: Date;
  lastActivity: Date;
  stats: {
    totalPosts: number;
    scheduledPosts: number;
    engagementRate: number;
  };
}