'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, ThumbsUp, MessageCircle, Repeat2 } from 'lucide-react';
import { Project } from '../types';

interface LinkedInPostProps {
  platform: string;
  project: Project;
}

export function LinkedInPost({ platform, project }: LinkedInPostProps) {
  if (!project) return null;
  
  const { name, linkedInContent } = project;

  return (
    <Card className="p-4 space-y-4 h-full">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Linkedin className="w-6 h-6 text-blue-500" />
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">AI-Powered Innovation</p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm">
          {linkedInContent.title}<br />
          {linkedInContent.content}
        </p>
        <Badge variant="secondary" className="bg-blue-500/10 text-blue-500">
          {linkedInContent.hashtag}
        </Badge>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto">
        <button className="flex items-center gap-1">
          <ThumbsUp className="w-4 h-4" />
          {linkedInContent.likes}
        </button>
        <button className="flex items-center gap-1">
          <MessageCircle className="w-4 h-4" />
          {linkedInContent.comments}
        </button>
        <button className="flex items-center gap-1">
          <Repeat2 className="w-4 h-4" />
          {linkedInContent.shares}
        </button>
      </div>
    </Card>
  );
}