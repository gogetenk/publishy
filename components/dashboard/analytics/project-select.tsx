'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const MOCK_PROJECTS = [
  { id: '1', name: 'DevTools Pro' },
  { id: '2', name: 'CodeSnippets' },
];

interface ProjectSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProjectSelect({ value, onChange }: ProjectSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select project" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Projects</SelectItem>
        {MOCK_PROJECTS.map((project) => (
          <SelectItem key={project.id} value={project.id}>
            {project.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}