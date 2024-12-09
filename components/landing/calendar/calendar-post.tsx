'use client';

import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';
import { CalendarPost } from './types';
import { forwardRef } from 'react';

interface PostItemProps {
  post: CalendarPost;
}

export const PostItem = forwardRef<HTMLDivElement, PostItemProps>(({ post }, ref) => {
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ 
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 1
      }}
      className={`rounded p-1 border text-xs ${post.color}`}
    >
      <div className="flex items-center gap-1 mb-0.5">
        <Badge variant="secondary" className="px-1 py-0">
          {post.platform === 'Twitter' ? (
            <Twitter className="w-2 h-2 mr-0.5" />
          ) : (
            <Linkedin className="w-2 h-2 mr-0.5" />
          )}
          <span className="text-[10px]">{post.time}</span>
        </Badge>
      </div>
      <div className="truncate text-[10px]">{post.title}</div>
    </motion.div>
  );
});

PostItem.displayName = 'PostItem';