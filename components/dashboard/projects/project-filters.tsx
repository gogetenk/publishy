'use client';

import { Button } from '@/components/ui/button';

interface ProjectFiltersProps {
  value: 'all' | 'active' | 'archived';
  onChange: (value: 'all' | 'active' | 'archived') => void;
}

export function ProjectFilters({ value, onChange }: ProjectFiltersProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={value === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onChange('all')}
      >
        All
      </Button>
      <Button
        variant={value === 'active' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onChange('active')}
      >
        Active
      </Button>
      <Button
        variant={value === 'archived' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onChange('archived')}
      >
        Archived
      </Button>
    </div>
  );
}