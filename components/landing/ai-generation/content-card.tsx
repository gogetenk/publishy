'use client';

import { LinkedInPost } from './content-types/linkedin-post';
import { InstagramPost } from './content-types/instagram-post';
import { ReelPreview } from './content-types/reel-preview';
import { TwitterPost } from './content-types/twitter-post';
import { motion } from 'framer-motion';
import { Project } from './types';

interface ContentCardProps {
  type: 'text' | 'image' | 'video';
  platform: string;
  color: string;
  project: Project;
  isTransitioning: boolean;
}

export function ContentCard({ type, platform, project, isTransitioning }: ContentCardProps) {
  const Component = {
    text: platform === 'LinkedIn' ? LinkedInPost : TwitterPost,
    image: InstagramPost,
    video: ReelPreview
  }[type];

  return (
    <motion.div
      className="h-full"
      animate={{
        opacity: isTransitioning ? 0 : 1,
        scale: isTransitioning ? 0.8 : 1,
      }}
      transition={{
        duration: 0.5,
        ease: "anticipate"
      }}
    >
      <Component platform={platform} project={project} />
    </motion.div>
  );
}