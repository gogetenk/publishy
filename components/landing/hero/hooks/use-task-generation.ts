'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Task, RssFeed, Keyword, STATUS_SEQUENCE } from '../types';
import { generateTaskContent } from '../utils';

const NICHES = [
  { name: 'tech', feeds: [0, 1], keywords: [0, 1] }, // Tech & Dev
  { name: 'pets', feeds: [2, 3], keywords: [2, 3] }, // Pet Care
  { name: 'fitness', feeds: [4, 5], keywords: [4, 5] }, // Fitness
];

export function useTaskGeneration(
  allRssFeeds: RssFeed[],
  allKeywords: Keyword[]
) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loopCount, setLoopCount] = useState(0);

  // Select current niche based on loop count
  const currentNiche = useMemo(() => {
    const nicheIndex = loopCount % NICHES.length;
    const niche = NICHES[nicheIndex];
    return {
      ...niche,
      rssFeeds: niche.feeds.map(i => allRssFeeds[i]),
      keywords: niche.keywords.map(i => allKeywords[i])
    };
  }, [loopCount, allRssFeeds, allKeywords]);

  const generateTask = useCallback(() => {
    const useRss = currentTaskIndex % 2 === 0;
    const platform = currentTaskIndex % 3 === 0 ? 'Twitter' : 'LinkedIn';
    
    if (useRss) {
      const feed = currentNiche.rssFeeds[currentTaskIndex % currentNiche.rssFeeds.length];
      return {
        id: `task-${currentTaskIndex}-${loopCount}`,
        platform,
        status: 'proposing' as const,
        content: generateTaskContent(feed, loopCount),
        source: feed.name,
      };
    } else {
      const keyword = currentNiche.keywords[currentTaskIndex % currentNiche.keywords.length];
      return {
        id: `task-${currentTaskIndex}-${loopCount}`,
        platform,
        status: 'proposing' as const,
        content: generateTaskContent(keyword, loopCount),
        source: keyword.term,
      };
    }
  }, [currentTaskIndex, currentNiche, loopCount]);

  const resetAnimation = useCallback(() => {
    setTasks([]);
    setCurrentTaskIndex(0);
    setIsCompleted(false);
    setLoopCount(prev => prev + 1);
  }, []);

  // Generate new tasks
  useEffect(() => {
    if (tasks.length >= 5) return;

    const taskInterval = setInterval(() => {
      setTasks(prev => [...prev, generateTask()]);
      setCurrentTaskIndex(prev => prev + 1);
    }, 1500);

    return () => clearInterval(taskInterval);
  }, [tasks.length, generateTask]);

  // Update task statuses
  useEffect(() => {
    if (tasks.length === 0) return;

    const statusInterval = setInterval(() => {
      let allCompleted = true;
      
      setTasks(prev => 
        prev.map(task => {
          const currentStatusIndex = STATUS_SEQUENCE.indexOf(task.status);
          if (currentStatusIndex < STATUS_SEQUENCE.length - 1) {
            allCompleted = false;
            return {
              ...task,
              status: STATUS_SEQUENCE[currentStatusIndex + 1]
            };
          }
          return task;
        })
      );

      if (allCompleted && tasks.length === 5) {
        setIsCompleted(true);
        setTimeout(resetAnimation, 3000);
      }
    }, 1500);

    return () => clearInterval(statusInterval);
  }, [tasks, resetAnimation]);

  return { 
    tasks, 
    isCompleted,
    currentNiche: currentNiche.name
  };
}