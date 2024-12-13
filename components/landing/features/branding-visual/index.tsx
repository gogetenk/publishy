'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { SocialPostCard } from '../../branding/social-post-card';
import { SOCIAL_POSTS } from './social-posts';

export function BrandingVisual() {
  const accentColor = '#8B5CF6'; // Violet color for branding

  return (
    <div className="relative w-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6">
      <div className="grid grid-cols-3 gap-4">
        {SOCIAL_POSTS.map((post, index) => (
          <SocialPostCard
            key={post.platform}
            {...post}
            index={index}
            accentColor={accentColor}
          />
        ))}
      </div>
      <motion.div
        className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
    </div>
  );
}