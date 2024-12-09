'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Project } from '@/types/project';
import { ProjectOverview } from './project-overview';
import { ProjectAnalytics } from './project-analytics';
import { ProjectSettings } from './project-settings';
import { ProjectRssFeeds } from './project-rss-feeds';
import { ContentCalendar } from '@/components/dashboard/content-calendar';

interface ProjectTabsProps {
  project: Project;
}

export function ProjectTabs({ project }: ProjectTabsProps) {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="content">Content Calendar</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="rss">RSS Feeds</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="space-y-4">
        <ProjectOverview project={project} />
      </TabsContent>

      <TabsContent value="content" className="space-y-4">
        <ContentCalendar />
      </TabsContent>

      <TabsContent value="analytics" className="space-y-4">
        <ProjectAnalytics />
      </TabsContent>

      <TabsContent value="rss" className="space-y-4">
        <ProjectRssFeeds projectId={project.id} />
      </TabsContent>

      <TabsContent value="settings" className="space-y-4">
        <ProjectSettings project={project} />
      </TabsContent>
    </Tabs>
  );
}