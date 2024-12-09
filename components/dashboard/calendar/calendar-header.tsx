'use client';

import { Button } from '@/components/ui/button';
import { Calendar, Grid } from 'lucide-react';

type ViewMode = 'month' | 'week';

interface CalendarHeaderProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function CalendarHeader({ viewMode, onViewModeChange }: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-2">
        <Button
          variant={viewMode === 'month' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onViewModeChange('month')}
        >
          <Calendar className="h-4 w-4 mr-2" />
          Month
        </Button>
        <Button
          variant={viewMode === 'week' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onViewModeChange('week')}
        >
          <Grid className="h-4 w-4 mr-2" />
          Week
        </Button>
      </div>
    </div>
  );
}