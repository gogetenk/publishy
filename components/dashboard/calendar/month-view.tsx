'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  addDays,
  endOfMonth,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { Clock, Share2 } from 'lucide-react';
import { ScheduledPost } from './types';

interface MonthViewProps {
  selectedDate: Date;
  posts: ScheduledPost[];
  onSelectDate: (date: Date) => void;
  onPostClick: (post: ScheduledPost) => void;
}

export function MonthView({ selectedDate, posts, onSelectDate, onPostClick }: MonthViewProps) {
  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);

  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'twitter':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= monthEnd) {
    for (let i = 0; i < 7; i++) {
      const currentDate = day;
      const dayPosts = posts.filter((post) =>
        isSameDay(new Date(post.date), currentDate)
      );
      
      days.push(
        <Card
          key={day.toISOString()}
          className={cn(
            'p-2 min-h-[120px] cursor-pointer hover:bg-muted/50 transition-colors',
            !isSameMonth(day, monthStart) && 'opacity-50',
            isSameDay(day, selectedDate) && 'ring-2 ring-primary'
          )}
          onClick={() => onSelectDate(currentDate)}
        >
          <div className="text-sm font-medium mb-1">
            {format(day, 'd')}
          </div>
          <div className="space-y-1">
            {dayPosts.map((post) => (
              <div
                key={post.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onPostClick(post);
                }}
                className="p-1.5 rounded-md bg-background border hover:bg-muted cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  <Badge variant="secondary" className={getPlatformColor(post.platform)}>
                    <Share2 className="w-3 h-3 mr-1" />
                    {post.platform}
                  </Badge>
                  {post.time && (
                    <Badge variant="outline" className="ml-auto text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.time}
                    </Badge>
                  )}
                </div>
                <h4 className="text-xs truncate mt-1">{post.title}</h4>
              </div>
            ))}
          </div>
        </Card>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div key={day.toISOString()} className="grid grid-cols-7 gap-2">
        {days}
      </div>
    );
    days = [];
  }

  return <div className="space-y-2">{rows}</div>;
}