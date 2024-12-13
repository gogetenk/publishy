'use client';

import { Card } from '@/components/ui/card';
import { Instagram, Heart, MessageCircle, Bookmark } from 'lucide-react';
import { Project } from '../types';

interface InstagramPostProps {
  platform: string;
  project: Project;
}

export function InstagramPost({ platform, project }: InstagramPostProps) {
  if (!project) return null;
  
  const { name, instagramContent } = project;

  return (
    <Card className="overflow-hidden">
      <div className="p-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center">
          <Instagram className="w-4 h-4 text-white" />
        </div>
        <span className="font-medium">{name.toLowerCase()}</span>
      </div>

      <div className="aspect-square relative overflow-hidden">
        <img
          src={instagramContent.image}
          alt="AI Generated Content"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Heart className="w-6 h-6" />
            <MessageCircle className="w-6 h-6" />
          </div>
          <Bookmark className="w-6 h-6" />
        </div>
        <div>
          <span className="font-medium">{instagramContent.likes} likes</span>
        </div>
        <p className="text-sm">
          <span className="font-medium">{name.toLowerCase()}</span>{' '}
          {instagramContent.caption}
        </p>
      </div>
    </Card>
  );
}