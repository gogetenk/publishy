'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

interface SocialPostCardProps {
  platform: 'Twitter' | 'Instagram' | 'LinkedIn';
  image: string;
  content: string;
  index: number;
  accentColor: string;
}

export function SocialPostCard({ platform, image, content, index, accentColor }: SocialPostCardProps) {
  const getPlatformIcon = () => {
    switch (platform) {
      case 'Twitter':
        return <Twitter className="h-5 w-5" />;
      case 'Instagram':
        return <Instagram className="h-5 w-5" />;
      case 'LinkedIn':
        return <Linkedin className="h-5 w-5" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            {getPlatformIcon()}
            <span className="font-medium">{platform}</span>
          </div>
          <div 
            className="relative aspect-video mb-3 rounded-lg overflow-hidden"
            style={{ backgroundColor: `${accentColor}15` }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={image}
                alt=""
                className="w-16 h-16 opacity-90"
                style={{ filter: `drop-shadow(0 2px 4px ${accentColor}40)` }}
              />
            </div>
            <div 
              className="absolute bottom-0 left-0 right-0 h-1/3"
              style={{ 
                background: `linear-gradient(to top, ${accentColor}20, transparent)`
              }}
            />
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{content}</p>
          <button 
            className="mt-3 text-sm font-medium px-4 py-1 rounded-full w-full"
            style={{ 
              backgroundColor: `${accentColor}15`,
              color: accentColor,
            }}
          >
            Read More
          </button>
        </div>
      </Card>
    </motion.div>
  );
}