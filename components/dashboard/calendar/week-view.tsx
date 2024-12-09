'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { addDays, format, isSameDay, startOfWeek } from 'date-fns';
import { Clock, Share2 } from 'lucide-react';
import { ScheduledPost } from './types';

interface WeekViewProps {
  selectedDate: Date;
  posts: ScheduledPost[];
  onSelectDate: (date: Date) => void;
  onPostClick: (post: ScheduledPost) => void;
}

export function WeekView({ selectedDate, posts, onSelectDate, onPostClick }: WeekViewProps) {
  const weekStart = startOfWeek(selectedDate);
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

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

  return (
    <div className="grid grid-cols-7 gap-2">
      {weekDays.map((date) => {
        const dayPosts = posts.filter((post) => 
          isSameDay(new Date(post.date), date)
        );
        
        return (
          <Card
            key={date.toISOString()}
            className={cn(
              'p-2 min-h-[200px] cursor-pointer hover:bg-muted/50 transition-colors',
              isSameDay(date, selectedDate) && 'ring-2 ring-primary'
            )}
            onClick={() => onSelectDate(date)}
          >
            <div className="text-sm font-medium mb-2">
              {format(date, 'EEE d')}
            </div>
            <div className="space-y-2">
              {dayPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    onPostClick(post);
                  }}
                  className="p-2 rounded-lg bg-background border hover:bg-muted cursor-pointer"
                >
                  <div className="flex items-center gap-1 mb-1">
                    <Badge variant="secondary" className={getPlatformColor(post.platform)}>
                      <Share2 className="w-3 h-3 mr-1" />
                      {post.platform}
                    </Badge>
                    {post.time && (
                      <Badge variant="outline" className="ml-auto">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.time}
                      </Badge>
                    )}
                  </div>
                  <h4 className="text-sm font-medium truncate">{post.title}</h4>
                </div>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
}