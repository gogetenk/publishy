'use client';

import { useState, useEffect } from 'react';
import { PROJECTS } from '../content-data';

const GENERATION_DELAY = 500;
const DISPLAY_DURATION = 8000;
const TRANSITION_DURATION = 1200;

export function useContentGeneration() {
  const [generatedContent, setGeneratedContent] = useState<number[]>([]);
  const [isGenerating, setIsGenerating] = useState(true);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const startGeneration = () => {
      setGeneratedContent([]);
      setIsGenerating(true);
      setIsTransitioning(false);
      
      // Generate content sequentially
      [0, 1, 2, 3].forEach((index) => {
        setTimeout(() => {
          setGeneratedContent(prev => [...prev, index]);
        }, (index + 1) * GENERATION_DELAY);
      });

      // Complete generation
      setTimeout(() => {
        setIsGenerating(false);
      }, 4 * GENERATION_DELAY);

      // Start transition to next project
      setTimeout(() => {
        setIsTransitioning(true);
        
        setTimeout(() => {
          setCurrentProjectIndex((prev) => (prev + 1) % PROJECTS.length);
        }, TRANSITION_DURATION);
      }, DISPLAY_DURATION);
    };

    startGeneration();
    return () => {};
  }, [currentProjectIndex]);

  return {
    generatedContent,
    isGenerating,
    currentProject: PROJECTS[currentProjectIndex],
    isTransitioning,
  };
}