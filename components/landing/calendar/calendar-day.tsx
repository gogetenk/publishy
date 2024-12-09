'use client';

import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { PostItem } from './calendar-post';
import { CalendarDay } from './types';

interface DayCardProps {
  day: CalendarDay;
  index: number;
}

export function DayCard({ day, index }: DayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className="aspect-square"
    >
      <Card className="w-full h-full p-1 flex flex-col">
        <div className="text-xs text-muted-foreground mb-1">{day.dayNumber}</div>
        <div className="flex-1 space-y-1">
          <AnimatePresence mode="popLayout">
            {day.posts.map((post) => (
              <PostItem key={`${day.dayNumber}-${post.id}`} post={post} />
            ))}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
}