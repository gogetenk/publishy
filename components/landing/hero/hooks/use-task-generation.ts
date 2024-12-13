'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Task, RssFeed, Keyword } from '../types';
import { generateTaskContent } from '../utils';

const PLATFORMS = ['Twitter', 'LinkedIn', 'Instagram', 'Newsletter'] as const;

interface NicheConfig {
  name: string;
  rssFeeds: RssFeed[];
  keywords: Keyword[];
}

export function useTaskGeneration(
  allRssFeeds: RssFeed[],
  allKeywords: Keyword[]
) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentNicheIndex, setCurrentNicheIndex] = useState(0);

  // Define niches with their associated feeds and keywords
  const niches = useMemo(() => {
    const categories = ['tech', 'dev', 'fitness', 'pets', 'food', 'startup', 'crypto'] as const;
    
    return categories.map(category => ({
      name: category,
      rssFeeds: allRssFeeds.filter(feed => feed.category === category),
      keywords: allKeywords.filter(keyword => keyword.category === category)
    })).filter(niche => niche.rssFeeds.length > 0 || niche.keywords.length > 0);
  }, [allRssFeeds, allKeywords]);

  const currentNiche = useMemo(() => 
    niches[currentNicheIndex % niches.length],
    [niches, currentNicheIndex]
  );

  const generateTask = useCallback(() => {
    if (!currentNiche) return null;

    const useRss = currentTaskIndex % 2 === 0;
    const platformIndex = Math.floor(Math.random() * PLATFORMS.length);
    const platform = PLATFORMS[platformIndex];
    
    if (useRss && currentNiche.rssFeeds.length > 0) {
      const feed = currentNiche.rssFeeds[currentTaskIndex % currentNiche.rssFeeds.length];
      return {
        id: `task-${currentTaskIndex}-${loopCount}-${currentNiche.name}`,
        platform,
        status: 'proposing' as const,
        content: generateTaskContent(feed, loopCount),
        source: feed.name,
      };
    } else if (currentNiche.keywords.length > 0) {
      const keyword = currentNiche.keywords[currentTaskIndex % currentNiche.keywords.length];
      return {
        id: `task-${currentTaskIndex}-${loopCount}-${currentNiche.name}`,
        platform,
        status: 'proposing' as const,
        content: generateTaskContent(keyword, loopCount),
        source: keyword.term,
      };
    }

    return null;
  }, [currentNiche, currentTaskIndex, loopCount]);

  const resetAnimation = useCallback(() => {
    setTasks([]);
    setCurrentTaskIndex(0);
    setIsCompleted(false);
    setIsLoading(true);
    setLoopCount(prev => prev + 1);
    setCurrentNicheIndex(prev => (prev + 1) % niches.length);
  }, [niches.length]);

  // Handle loading state
  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  // Generate new tasks
  useEffect(() => {
    if (isLoading || tasks.length >= 5) return;

    const taskInterval = setInterval(() => {
      const newTask = generateTask();
      if (newTask) {
        setTasks(prev => [...prev, newTask]);
        setCurrentTaskIndex(prev => prev + 1);
      }
    }, 1500);

    return () => clearInterval(taskInterval);
  }, [tasks.length, generateTask, isLoading]);

  // Update task statuses
  useEffect(() => {
    if (tasks.length === 0) return;

    const statusInterval = setInterval(() => {
      let allCompleted = true;
      
      setTasks(prev => 
        prev.map(task => {
          const currentStatusIndex = ['proposing', 'reviewing', 'generating', 'scheduling', 'published'].indexOf(task.status);
          if (currentStatusIndex < 4) {
            allCompleted = false;
            return {
              ...task,
              status: ['proposing', 'reviewing', 'generating', 'scheduling', 'published'][currentStatusIndex + 1] as Task['status']
            };
          }
          return task;
        })
      );

      if (allCompleted && tasks.length === 5) {
        setIsCompleted(true);
        setTimeout(resetAnimation, 2000);
      }
    }, 1500);

    return () => clearInterval(statusInterval);
  }, [tasks, resetAnimation]);

  return { 
    tasks, 
    isCompleted,
    currentNiche: currentNiche?.name || 'tech',
    isLoading
  };
}