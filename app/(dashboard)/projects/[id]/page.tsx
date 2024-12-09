import { Project } from '@/types/project';
import { ProjectOverview } from '@/components/dashboard/projects/details/project-overview';
import { ProjectAnalytics } from '@/components/dashboard/projects/details/project-analytics';
import { ProjectSettings } from '@/components/dashboard/projects/details/project-settings';
import { ProjectRssFeeds } from '@/components/dashboard/projects/details/project-rss-feeds';
import { ContentCalendar } from '@/components/dashboard/content-calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

export function generateStaticParams() {
  return MOCK_PROJECTS.map((project) => ({
    id: project.id,
  }));
}

interface ProjectDetailsPageProps {
  params: {
    id: string;
  };
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = MOCK_PROJECTS.find((p) => p.id === params.id) || MOCK_PROJECTS[0];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">{project.name}</h2>
      </div>

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
    </div>
  );
}