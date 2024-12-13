'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { ProjectCard } from '../projects/project-card';
import { DashboardResponse } from '@/types/api';

interface ProjectGridProps {
  projects?: DashboardResponse['projects'];
  isLoading: boolean;
}

export function ProjectGrid({ projects, isLoading }: ProjectGridProps) {
  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array(3).fill(0).map((_, i) => (
          <Skeleton key={i} className="h-[200px]" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects?.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}