'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart2, Calendar, Settings } from 'lucide-react';
import { Project } from '@/types/project';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Link href={`/dashboard/projects/${project.id}`} className="hover:underline">
              <CardTitle>{project.name}</CardTitle>
            </Link>
            <CardDescription>{project.description}</CardDescription>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/dashboard/projects/${project.id}/settings`}>
              <Settings className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            {project.platforms.map((platform) => (
              <Badge key={platform} variant="secondary">
                {platform}
              </Badge>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">
                Scheduled Posts
              </div>
              <div className="text-2xl font-bold">
                {project.stats.scheduledPosts}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground">
                Engagement Rate
              </div>
              <div className="text-2xl font-bold">
                {project.stats.engagementRate}%
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild className="flex-1">
              <Link href={`/projects/${project.id}`}>
                <Calendar className="h-4 w-4 mr-2" />
                View Project
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href={`/projects/${project.id}?tab=analytics`}>
                <BarChart2 className="h-4 w-4 mr-2" />
                Analytics
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}