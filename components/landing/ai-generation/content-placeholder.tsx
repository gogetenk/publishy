'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FileText, Image, Video } from 'lucide-react';

interface ContentPlaceholderProps {
  type: 'text' | 'image' | 'video';
  platform: string;
  color: string;
  isGenerating: boolean;
}

export function ContentPlaceholder({ type, platform, color, isGenerating }: ContentPlaceholderProps) {
  const Icon = {
    text: FileText,
    image: Image,
    video: Video
  }[type];

  const colorMap = {
    blue: 'from-blue-500/20 to-blue-500/40',
    purple: 'from-purple-500/20 to-purple-500/40',
    pink: 'from-pink-500/20 to-pink-500/40'
  };

  const progressColor = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500'
  };

  // Different durations based on content type
  const getDuration = () => {
    switch (type) {
      case 'text':
        return 1.5; // Fastest - text generation
      case 'image':
        return 2.5; // Medium - image generation
      case 'video':
        return 3.5; // Slowest - video generation
    }
  };

  // Different easing functions for variety
  const getEasing = () => {
    switch (type) {
      case 'text':
        return [0.4, 0, 0.2, 1]; // Smooth acceleration
      case 'image':
        return [0.2, 0.8, 0.4, 1]; // Bounce-like
      case 'video':
        return [0.6, 0.1, 0.3, 1]; // Delayed start
    }
  };

  return (
    <Card className="relative aspect-[4/5] flex flex-col overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[color as keyof typeof colorMap]}`} />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="relative space-y-4 text-center">
          <motion.div 
            className={`w-16 h-16 mx-auto rounded-xl bg-${color}-500/10 flex items-center justify-center`}
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className={`w-8 h-8 text-${color}-500`} />
          </motion.div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium">{platform}</p>
            <p className="text-xs text-muted-foreground">
              Generating {type} content...
            </p>
          </div>
        </div>
      </div>

      {isGenerating && (
        <div className="relative p-4">
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${progressColor[color as keyof typeof progressColor]}`}
              initial={{ width: "0%" }}
              animate={{ 
                width: "100%",
                transition: {
                  duration: getDuration(),
                  ease: getEasing(),
                }
              }}
            />
          </div>
        </div>
      )}
    </Card>
  );
}