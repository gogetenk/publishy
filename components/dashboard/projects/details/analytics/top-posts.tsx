'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ExternalLink, Share2, ThumbsUp, MessageCircle } from 'lucide-react';
import { format } from 'date-fns';

interface TopPost {
  id: string;
  title: string;
  platform: string;
  publishedAt: Date;
  engagement: {
    likes: number;
    shares: number;
    comments: number;
  };
  url: string;
}

const TOP_POSTS: TopPost[] = [
  {
    id: '1',
    title: '10 Must-Have Developer Tools for 2024',
    platform: 'LinkedIn',
    publishedAt: new Date('2024-03-15'),
    engagement: {
      likes: 1250,
      shares: 450,
      comments: 89,
    },
    url: 'https://linkedin.com/post/1',
  },
  {
    id: '2',
    title: 'The Future of Web Development: Our Take',
    platform: 'Twitter',
    publishedAt: new Date('2024-03-18'),
    engagement: {
      likes: 890,
      shares: 320,
      comments: 65,
    },
    url: 'https://twitter.com/post/2',
  },
  {
    id: '3',
    title: 'How We Built Our Latest Feature',
    platform: 'Dev.to',
    publishedAt: new Date('2024-03-20'),
    engagement: {
      likes: 750,
      shares: 280,
      comments: 42,
    },
    url: 'https://dev.to/post/3',
  },
];

export function TopPosts() {
  const getPlatformColor = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'linkedin':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'twitter':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200';
      case 'dev.to':
        return 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Top Performing Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Post</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Published</TableHead>
              <TableHead>Engagement</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {TOP_POSTS.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <div className="font-medium">{post.title}</div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={getPlatformColor(post.platform)}
                  >
                    <Share2 className="w-3 h-3 mr-1" />
                    {post.platform}
                  </Badge>
                </TableCell>
                <TableCell>{format(post.publishedAt, 'MMM d, yyyy')}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-muted-foreground">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span>{post.engagement.likes}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Share2 className="w-4 h-4 mr-1" />
                      <span>{post.engagement.shares}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>{post.engagement.comments}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}