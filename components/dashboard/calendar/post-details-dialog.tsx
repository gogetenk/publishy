'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { format } from 'date-fns';
import { Clock, Globe, Share2 } from 'lucide-react';
import { ScheduledPost } from './types';

interface PostDetailsDialogProps {
  post: ScheduledPost;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PostDetailsDialog({ post, open, onOpenChange }: PostDetailsDialogProps) {
  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'twitter':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200';
      case 'facebook':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'published':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{post.title}</DialogTitle>
          <DialogDescription>
            Scheduled for {format(post.date, 'PPP')}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className={getPlatformColor(post.platform)}>
              <Share2 className="w-3 h-3 mr-1" />
              {post.platform}
            </Badge>
            <Badge variant="secondary" className={getStatusColor(post.status || '')}>
              <Clock className="w-3 h-3 mr-1" />
              {post.status}
            </Badge>
            {post.time && (
              <Badge variant="secondary">
                <Clock className="w-3 h-3 mr-1" />
                {post.time}
              </Badge>
            )}
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Content Preview</h4>
            <div className="rounded-md bg-muted p-4">
              <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                {post.content || 'No content preview available.'}
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline">Edit</Button>
            <Button variant="default">
              <Globe className="w-4 h-4 mr-2" />
              View Live
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}