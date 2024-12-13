'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Twitter, MessageCircle, Repeat2, Heart } from 'lucide-react';
import { Project } from '../types';

interface TwitterPostProps {
  platform: string;
  project: Project;
}

export function TwitterPost({ platform, project }: TwitterPostProps) {
  if (!project) return null;
  
  const { name, twitterContent } = project;

  return (
    <Card className="p-4 space-y-4 h-full">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center">
          <Twitter className="w-5 h-5 text-sky-500" />
        </div>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">@{name.toLowerCase().replace(/\s+/g, '')}</p>
        </div>
      </div>

      <p className="text-sm">
        {twitterContent.content}
      </p>

      <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
        <button className="flex items-center gap-1 hover:text-sky-500">
          <MessageCircle className="w-4 h-4" />
          {twitterContent.replies}
        </button>
        <button className="flex items-center gap-1 hover:text-green-500">
          <Repeat2 className="w-4 h-4" />
          {twitterContent.retweets}
        </button>
        <button className="flex items-center gap-1 hover:text-red-500">
          <Heart className="w-4 h-4" />
          {twitterContent.likes}
        </button>
      </div>
    </Card>
  );
}