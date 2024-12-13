// Types générés à partir de l'OpenAPI
export interface DashboardResponse {
  overview: {
    activeProjects: number;
    totalEngagement: number;
    scheduledPosts: number;
    connectedAccounts: number;
    trends: {
      activeProjectsChange: number;
      engagementChange: number;
      scheduledPostsChange: number;
    };
  };
  projects: Array<{
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
  }>;
}

export interface ApiResponse<T> {
  value: T;
  status: number;
  isSuccess: boolean;
  successMessage?: string;
  correlationId?: string;
  errors?: string[];
  validationErrors?: Array<{
    identifier: string;
    errorMessage: string;
    errorCode: string;
    severity: number;
  }>;
}