'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart2, Calendar, Settings } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Platforms</TableHead>
          <TableHead>Last Activity</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell>
              <div className="space-y-1">
                <Link href={`/dashboard/projects/${project.id}`} className="font-medium hover:underline">
                  {project.name}
                </Link>
                <div className="text-sm text-muted-foreground">
                  {project.description}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex gap-1">
                {project.platforms.map((platform) => (
                  <Badge key={platform} variant="secondary">
                    {platform}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              {format(project.lastActivity, 'MMM d, yyyy')}
            </TableCell>
            <TableCell>
              <Badge
                variant={project.status === 'active' ? 'default' : 'secondary'}
              >
                {project.status}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button asChild size="sm" variant="ghost">
                  <Link href={`/dashboard/projects/${project.id}`}>
                    <Calendar className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link href={`/dashboard/projects/${project.id}?tab=analytics`}>
                    <BarChart2 className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link href={`/dashboard/projects/${project.id}?tab=settings`}>
                    <Settings className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}