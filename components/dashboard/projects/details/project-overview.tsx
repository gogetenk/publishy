'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import { BarChart2, Users, Target, Rss } from 'lucide-react';
import { format } from 'date-fns';
import { ProjectEngagementChart } from './project-engagement-chart';
import { ProjectPosts } from './project-posts';

interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Project Brief */}
        <Card>
          <CardHeader>
            <CardTitle>Project Brief</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex gap-2">
                {project.platforms.map((platform) => (
                  <Badge key={platform} variant="secondary">
                    {platform}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Created:</span>{' '}
                {format(project.createdAt, 'MMM d, yyyy')}
              </div>
              <div>
                <span className="text-muted-foreground">Last Activity:</span>{' '}
                {format(project.lastActivity, 'MMM d, yyyy')}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Engagement Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Engagement Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="space-y-1">
                <div className="text-2xl font-bold">{project.stats.totalPosts}</div>
                <div className="text-xs text-muted-foreground">Total Posts</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{project.stats.scheduledPosts}</div>
                <div className="text-xs text-muted-foreground">Scheduled</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{project.stats.engagementRate}%</div>
                <div className="text-xs text-muted-foreground">Engagement</div>
              </div>
            </div>
            <div className="h-[200px]">
              <ProjectEngagementChart />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Generated Posts */}
      <ProjectPosts />
    </div>
  );
}