'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';
import { RSS_FEEDS, KEYWORDS } from './content-sources';
import { SourceSection } from './components/source-section';
import { TaskCard } from './components/task-card';
import { AnimatedBot } from './components/animated-bot';
import { useTaskGeneration } from './hooks/use-task-generation';

export function TaskAnimation() {
  const { tasks, isCompleted, currentNiche, isLoading } = useTaskGeneration(RSS_FEEDS, KEYWORDS);
  const botPosition = tasks.length > 0 ? tasks.length - 1 : 0;

  // Filter sources based on current niche
  const selectedRssFeeds = useMemo(() => 
    RSS_FEEDS.filter(feed => feed.category === currentNiche || 
      (currentNiche === 'tech' && feed.category === 'dev')).slice(0, 3), 
    [currentNiche]
  );

  const selectedKeywords = useMemo(() => 
    KEYWORDS.filter(keyword => keyword.category === currentNiche || 
      (currentNiche === 'tech' && keyword.category === 'dev')).slice(0, 2),
    [currentNiche]
  );

  return (
    <div className="relative w-full">
      <SourceSection
        selectedRssFeeds={selectedRssFeeds}
        selectedKeywords={selectedKeywords}
        isLoading={isLoading}
      />

      <div className="relative">
        <AnimatePresence mode="popLayout">
          {!isLoading && tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="mb-4 last:mb-0"
            >
              <TaskCard task={task} />
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatedBot position={botPosition} isCompleted={isCompleted} />
      </div>
    </div>
  );
}