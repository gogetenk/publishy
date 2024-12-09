'use client';

import { EngagementMetrics } from './analytics/engagement-metrics';
import { PlatformComparisonChart } from './analytics/platform-comparison-chart';
import { TopPosts } from './analytics/top-posts';
import { Recommendations } from './analytics/recommendations';

export function ProjectAnalytics() {
  return (
    <div className="space-y-4">
      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <EngagementMetrics />
      </div>

      {/* Charts and Tables */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <PlatformComparisonChart />
        <TopPosts />
        <Recommendations />
      </div>
    </div>
  );
}