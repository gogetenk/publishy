'use client';

import { BarChart3, Clock, Share2, ThumbsUp } from 'lucide-react';
import { MetricCard } from '../metrics/metric-card';
import { DashboardResponse } from '@/types/api';

interface DashboardMetricsProps {
  data?: DashboardResponse;
  isLoading: boolean;
}

export function DashboardMetrics({ data, isLoading }: DashboardMetricsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Active Projects"
        value={data?.overview.activeProjects || 0}
        change={data?.overview.trends.activeProjectsChange}
        icon={BarChart3}
        isLoading={isLoading}
      />
      <MetricCard
        title="Total Engagement"
        value={`${data?.overview.totalEngagement || 0}%`}
        change={data?.overview.trends.engagementChange}
        icon={ThumbsUp}
        isLoading={isLoading}
      />
      <MetricCard
        title="Scheduled Posts"
        value={data?.overview.scheduledPosts || 0}
        subtitle="Across all projects"
        icon={Clock}
        isLoading={isLoading}
      />
      <MetricCard
        title="Connected Accounts"
        value={data?.overview.connectedAccounts || 0}
        subtitle="Twitter, LinkedIn, GitHub"
        icon={Share2}
        isLoading={isLoading}
      />
    </div>
  );
}