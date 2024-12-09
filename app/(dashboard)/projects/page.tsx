'use client';

import { ProjectList } from '@/components/dashboard/projects/project-list';
import { CreateProjectButton } from '@/components/dashboard/projects/create-project-button';
import { ProjectFilters } from '@/components/dashboard/projects/project-filters';
import { Project } from '@/types/project';
import { useState } from 'react';

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

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'archived'>('all');

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <CreateProjectButton />
      </div>

      <div className="flex justify-end">
        <ProjectFilters value={filter} onChange={setFilter} />
      </div>

      <ProjectList projects={MOCK_PROJECTS} />
    </div>
  );
}