'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Clock, Share2, ThumbsUp, MessageCircle, Repeat2 } from 'lucide-react';
import { format } from 'date-fns';

interface Post {
  id: string;
  title: string;
  content: string;
  platform: string;
  publishedAt: Date;
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
}

const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'Product Launch Announcement',
    content: '🚀 Exciting news! We\'re thrilled to announce...',
    platform: 'LinkedIn',
    publishedAt: new Date('2024-03-20T09:00:00'),
    stats: {
      likes: 245,
      comments: 32,
      shares: 78,
    },
  },
  {
    id: '2',
    title: 'Tech Stack Deep Dive',
    content: 'Behind the scenes of our tech stack...',
    platform: 'Twitter',
    publishedAt: new Date('2024-03-19T14:00:00'),
    stats: {
      likes: 189,
      comments: 24,
      shares: 45,
    },
  },
  {
    id: '3',
    title: 'Weekly Developer Tips',
    content: 'This week\'s top developer productivity tips...',
    platform: 'LinkedIn',
    publishedAt: new Date('2024-03-18T10:30:00'),
    stats: {
      likes: 312,
      comments: 41,
      shares: 92,
    },
  },
];

export function ProjectPosts() {
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
    <Card>
      <CardHeader>
        <CardTitle>Generated Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Post</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Published</TableHead>
              <TableHead>Engagement</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_POSTS.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <div className="space-y-1">
                    <div className="font-medium">{post.title}</div>
                    <div className="text-sm text-muted-foreground line-clamp-1">
                      {post.content}
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getPlatformColor(post.platform)}>
                    <Share2 className="w-3 h-3 mr-1" />
                    {post.platform}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                    <span>{format(post.publishedAt, 'MMM d, h:mm a')}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-muted-foreground">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span>{post.stats.likes}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>{post.stats.comments}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Repeat2 className="w-4 h-4 mr-1" />
                      <span>{post.stats.shares}</span>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}