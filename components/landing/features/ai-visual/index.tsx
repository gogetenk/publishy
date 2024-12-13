'use client';

import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CalendarGrid } from '../../calendar/calendar-grid';
import { CalendarDay, CalendarPost } from '../../calendar/types';
import { INITIAL_POSTS, ADDITIONAL_POSTS } from '../../calendar/post-data';

export function AIVisual() {
  const [days, setDays] = useState<CalendarDay[]>([]);
  const [posts, setPosts] = useState<CalendarPost[]>(INITIAL_POSTS);

  useEffect(() => {
    const createCalendarDays = () => {
      const totalDays = 35; // 5 weeks
      return Array.from({ length: totalDays }, (_, i) => ({
        dayNumber: i + 1,
        posts: posts.filter(post => post.day === i + 1),
      }));
    };

    setDays(createCalendarDays());

    // Add additional posts after a delay
    const timer = setTimeout(() => {
      setPosts(prev => [...prev, ...ADDITIONAL_POSTS]);
    }, 2000);

    return () => clearTimeout(timer);
  }, [posts]);

  return (
    <div className="relative w-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6">
      <CalendarGrid days={days} />
      <motion.div
        className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Bot className="w-6 h-6" />
      </motion.div>
    </div>
  );
}