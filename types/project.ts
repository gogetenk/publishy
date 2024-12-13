export interface Project {
  id: string;
  name: string;
  description: string;
  platforms: string[];
  scheduledPosts: number;
  engagementRate: number;
  metrics: {
    totalPosts: number;
    interactions: number;
    averageEngagement: number;
  };
}
