'use client';

import { Card } from '@/components/ui/card';
import { Instagram, Heart, MessageCircle, Bookmark, Send } from 'lucide-react';
import { Project } from '../types';

interface ReelPreviewProps {
  platform: string;
  project: Project;
}

export function ReelPreview({ platform, project }: ReelPreviewProps) {
  if (!project) return null;
  
  const { name, reelContent } = project;

  return (
    <Card className="overflow-hidden h-full">
      <div className="h-full flex flex-col">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center">
              <Instagram className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-sm">{name.toLowerCase()}</span>
              <span className="text-xs text-muted-foreground">Reel</span>
            </div>
          </div>
        </div>

        <div className="relative flex-1 bg-black">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={reelContent.video}
            loop
            muted
            playsInline
            autoPlay
          />

          <div className="absolute right-4 bottom-20 flex flex-col items-center gap-6">
            <button className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xs">{reelContent.likes}</span>
            </button>

            <button className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xs">{reelContent.comments}</span>
            </button>

            <button className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                <Bookmark className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xs">Save</span>
            </button>

            <button className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-xs">Share</span>
            </button>
          </div>

          <div className="absolute left-4 right-16 bottom-6">
            <div className="text-white space-y-2">
              <p className="font-medium text-sm">{name.toLowerCase()}</p>
              <p className="text-sm">{reelContent.caption}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}