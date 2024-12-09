'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Bot, Calendar, BarChart2, LineChart, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CalendarGrid } from './calendar/calendar-grid';
import { CalendarDay, CalendarPost } from './calendar/types';
import { INITIAL_POSTS, ADDITIONAL_POSTS } from './calendar/post-data';
import { ProjectBrandCard } from './branding/project-brand-card';
import { ProjectCard } from './projects/project-card';
import { EngagementChart } from './projects/engagement-chart';

const BRAND_PROJECTS = [
  {
    name: 'DevTools Pro',
    font: 'Inter',
    colors: ['#3B82F6', '#60A5FA', '#93C5FD'],
  },
  {
    name: 'CodeSnippets',
    font: 'Roboto',
    colors: ['#10B981', '#34D399', '#6EE7B7'],
  },
  {
    name: 'TechBlog',
    font: 'Poppins',
    colors: ['#8B5CF6', '#A78BFA', '#C4B5FD'],
  },
];

const MOCK_PROJECTS = [
  {
    name: 'DevTools Pro',
    description: 'Developer productivity tools and extensions',
    platforms: ['Twitter', 'LinkedIn', 'Dev.to'],
    stats: {
      scheduledPosts: 12,
      engagementRate: 4.2,
    },
  },
  {
    name: 'CodeSnippets',
    description: 'Code snippet sharing platform',
    platforms: ['Twitter', 'LinkedIn', 'GitHub'],
    stats: {
      scheduledPosts: 8,
      engagementRate: 3.8,
    },
  },
  {
    name: 'TechBlog',
    description: 'Technical writing and tutorials',
    platforms: ['Dev.to', 'Medium', 'LinkedIn'],
    stats: {
      scheduledPosts: 15,
      engagementRate: 5.1,
    },
  },
];

const ENGAGEMENT_DATA = [45, 62, 58, 75, 82, 78, 90];

export function AIVisual() {
  const [days, setDays] = useState<CalendarDay[]>([]);
  const [posts, setPosts] = useState<CalendarPost[]>(INITIAL_POSTS);
  const [hasAddedPosts, setHasAddedPosts] = useState(false);

  useEffect(() => {
    const createCalendarDays = () => {
      const totalDays = 35; // 5 weeks
      return Array.from({ length: totalDays }, (_, i) => ({
        dayNumber: i + 1,
        posts: posts.filter(post => post.day === i + 1),
      }));
    };

    setDays(createCalendarDays());

    // Add additional posts only once
    if (!hasAddedPosts) {
      const timer = setTimeout(() => {
        setPosts(prev => [...prev, ...ADDITIONAL_POSTS]);
        setHasAddedPosts(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [posts, hasAddedPosts]);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6">
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

export function BrandingVisual() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6">
      <div className="grid gap-4">
        {BRAND_PROJECTS.map((project, index) => (
          <ProjectBrandCard key={project.name} {...project} index={index} />
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

export function ProjectsVisual() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6">
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          {MOCK_PROJECTS.map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
        </div>
        <EngagementChart data={ENGAGEMENT_DATA} />
      </div>
      <motion.div
        className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Calendar className="w-6 h-6" />
      </motion.div>
    </div>
  );
}

export function AnalyticsVisual() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6">
      <div className="grid gap-4">
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Performance Overview</h3>
              <LineChart className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="h-[200px] flex items-end gap-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-primary/20 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.random() * 100}%` }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </Card>
      </div>
      <motion.div
        className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <BarChart2 className="w-6 h-6" />
      </motion.div>
    </div>
  );
}