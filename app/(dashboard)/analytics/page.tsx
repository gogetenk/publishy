'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OverallMetrics } from '@/components/dashboard/analytics/overall-metrics';
import { PlatformComparison } from '@/components/dashboard/analytics/platform-comparison';
import { TopPerformingPosts } from '@/components/dashboard/analytics/top-performing-posts';
import { EngagementTrends } from '@/components/dashboard/analytics/engagement-trends';
import { RecommendationsPanel } from '@/components/dashboard/analytics/recommendations-panel';
import { ProjectComparison } from '@/components/dashboard/analytics/project-comparison';
import { ProjectSelect } from '@/components/dashboard/analytics/project-select';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useState } from 'react';
import { Project } from '@/types/project';

const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'DevTools Pro',
    description: 'Developer productivity tools and extensions',
    status: 'active',
    platforms: ['Twitter', 'LinkedIn', 'Dev.to'],
    createdAt: new Date('2024-01-15'),
    lastActivity: new Date('2024-03-20'),
    stats: {
      totalPosts: 45,
      scheduledPosts: 12,
      engagementRate: 4.2,
    },
  },
  {
    id: '2',
    name: 'CodeSnippets',
    description: 'Code snippet sharing platform',
    status: 'active',
    platforms: ['Twitter', 'LinkedIn', 'GitHub'],
    createdAt: new Date('2024-02-01'),
    lastActivity: new Date('2024-03-19'),
    stats: {
      totalPosts: 32,
      scheduledPosts: 8,
      engagementRate: 3.8,
    },
  },
];

export default function AnalyticsPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('all');

  const handleDownloadReport = () => {
    // TODO: Implement report download
    console.log('Downloading report...');
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <div className="flex items-center gap-4">
          <ProjectSelect
            value={selectedProjectId}
            onChange={setSelectedProjectId}
          />
          <Button onClick={handleDownloadReport}>
            <Download className="mr-2 h-4 w-4" />
            Download Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <OverallMetrics projectId={selectedProjectId} />
      </div>

      <div className="grid gap-4 grid-cols-1">
        <ProjectComparison projects={MOCK_PROJECTS} />
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <EngagementTrends projectId={selectedProjectId} />
        <PlatformComparison projectId={selectedProjectId} />
      </div>

      <div className="grid gap-4 grid-cols-1">
        <TopPerformingPosts projectId={selectedProjectId} />
        <RecommendationsPanel projectId={selectedProjectId} />
      </div>
    </div>
  );
}