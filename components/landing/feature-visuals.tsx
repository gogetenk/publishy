'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { AnimatePresence, motion } from 'framer-motion';
import { BarChart2, Bot, Calendar, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { AnimatedChart } from './analytics/animated-chart';
import { AnimatedInsights } from './analytics/animated-insights';
import { AnimatedMetric } from './analytics/animated-metric';
import { SocialPostCard } from './branding/social-post-card';
import { CalendarGrid } from './calendar/calendar-grid';
import { ADDITIONAL_POSTS, INITIAL_POSTS } from './calendar/post-data';
import { CalendarDay, CalendarPost } from './calendar/types';

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

    if (!hasAddedPosts) {
      const timer = setTimeout(() => {
        setPosts(prev => [...prev, ...ADDITIONAL_POSTS.slice(0, 3)]);
        setHasAddedPosts(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [posts, hasAddedPosts]);

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

export function BrandingVisual() {
  const SOCIAL_POSTS = [
    {
      platform: 'Twitter' as const,
      image: '/logo.svg',
      content: 'Excited to announce our latest feature release! Check out how we are making developer workflows even smoother. 🚀 #DevTools #Productivity',
      accentColor: '#1DA1F2',
    },
    {
      platform: 'Instagram' as const,
      image: '/logo.svg',
      content: '✨ Behind the scenes look at our latest product update! Swipe to see all the new features that will revolutionize your workflow.',
      accentColor: '#E1306C',
    },
    {
      platform: 'LinkedIn' as const,
      image: '/logo.svg',
      content: 'Thrilled to share our Q1 product roadmap! We are focused on delivering features that matter most to developers.',
      accentColor: '#0077B5',
    },
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6">
      <div className="grid gap-4 md:grid-cols-3">
        {SOCIAL_POSTS.map((post, index) => (
          <SocialPostCard key={post.platform} {...post} index={index} />
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

const PREDEFINED_TASK_NAMES = [
  "10 VS Code Productivity Hacks",
  "How B2B Analytics Can Boost Your ROI",
  "5 Morning Workout Routines For Busy Professionals",
  "Exclusive Insider Tips on Dashboard Optimization",
  "Beginner's Guide to Efficient Code Reviews",
  "Case Study: Scaling Your Fitness Community",
  "7 Data Insights to Transform Your Strategy",
  "Behind the Scenes: Building a Powerful Extension"
];

const INITIAL_PROJECTS = [
  {
    name: "FitParner",
    description: "Cross-platform fitness tracking app",
    platforms: ['Twitter', 'Instagram'],
    progress: 0,
    color: 'bg-blue-500/10 border-blue-500/20',
    accent: 'text-blue-500',
    tasks: [
      { id: '1', title: 'Top 5 Workouts to Kickstart Your Day', platform: 'Twitter', time: '4h', status: 'scheduled' },
      { id: '2', title: 'Success Story: How Sarah Reached Her Goals', platform: 'Instagram', time: '2d', status: 'draft' }
    ],
    justRemovedTask: false
  },
  {
    name: "Dashy",
    description: "B2B analytics dashboard",
    platforms: ['LinkedIn', 'Twitter'],
    progress: 0,
    color: 'bg-purple-500/10 border-purple-500/20',
    accent: 'text-purple-500',
    tasks: [
      { id: '3', title: 'Unlocking Growth: B2B Analytics Essentials', platform: 'LinkedIn', time: '2h', status: 'scheduled' },
      { id: '4', title: 'Data-Driven Decision Making: A Quick Start', platform: 'Twitter', time: '1d', status: 'draft' }
    ],
    justRemovedTask: false
  },
  {
    name: "PowerDev",
    description: "VS Code productivity extension",
    platforms: ['Twitter', 'Dev.to'],
    progress: 0,
    color: 'bg-emerald-500/10 border-emerald-500/20',
    accent: 'text-emerald-500',
    tasks: [
      { id: '5', title: '10 VS Code Productivity Hacks', platform: 'Twitter', time: '2d', status: 'scheduled' },
      { id: '6', title: 'Behind the Scenes: Building a Powerful Extension', platform: 'Dev.to', time: '3d', status: 'draft' }
    ],
    justRemovedTask: false
  }
];

export function ProjectsVisual() {
  const [projects, setProjects] = useState(() =>
    INITIAL_PROJECTS.map(project => ({
      ...project,
      progress: Math.floor(Math.random() * 40) // démarre entre 0 et 40%
    }))
  );

  // Index global pour choisir le nom des prochaines tâches
  const taskNameIndex = useRef(0);

  function getNextTaskName() {
    const name = PREDEFINED_TASK_NAMES[taskNameIndex.current % PREDEFINED_TASK_NAMES.length];
    taskNameIndex.current += 1;
    return name;
  }

  function generateNewTask(project: typeof INITIAL_PROJECTS[number]) {
    const randomPlatform = project.platforms[Math.floor(Math.random() * project.platforms.length)];
    const randomTime = `${Math.floor(Math.random() * 3) + 1}d`;
    const randomStatus = Math.random() > 0.5 ? 'scheduled' : 'draft';
    return {
      id: crypto.randomUUID(),
      title: getNextTaskName(),
      platform: randomPlatform,
      time: randomTime,
      status: randomStatus
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setProjects(currentProjects => {
        return currentProjects.map(project => {
          // Si on vient juste de supprimer une tâche au tick précédent et qu'aucune n'a encore été ajoutée
          if (project.justRemovedTask) {
            // On ajoute maintenant la nouvelle tâche
            const newTask = generateNewTask(project);
            return {
              ...project,
              tasks: [...project.tasks, newTask],
              justRemovedTask: false
            };
          }

          // Si pas de tâches, on réinitialise
          if (project.tasks.length === 0) {
            return {
              ...project,
              progress: Math.floor(Math.random() * 40),
              tasks:
                INITIAL_PROJECTS.find(p => p.name === project.name)?.tasks || [],
              justRemovedTask: false
            };
          }

          const newProgress = project.progress + 2;

          // Lorsque la progression atteint 100%, on supprime la première tâche
          if (newProgress >= 100) {
            const [, ...remainingTasks] = project.tasks;
            return {
              ...project,
              progress: Math.floor(Math.random() * 40),
              tasks: remainingTasks,
              justRemovedTask: true // Marque qu'on vient de retirer une tâche
            };
          }

          return {
            ...project,
            progress: newProgress
          };
        });
      });
    }, 200); // Intervalle un peu plus lent

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6">
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.8, 0.25, 1] }}
            className="flex gap-4"
          >
            {/* Project Card */}
            <Card className={`w-72 p-4 border-2 ${project.color}`}>
              <div className="mb-3">
                <h3 className="font-semibold">{project.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                {project.platforms.map((platform) => (
                  <Badge key={platform} variant="secondary">
                    {platform}
                  </Badge>
                ))}
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`absolute inset-y-0 left-0 ${project.accent} bg-current`}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              </div>
            </Card>

            {/* Task Queue */}
            <div className="flex gap-3">
              <AnimatePresence mode="popLayout">
                {project.tasks.slice(0, 2).map((task) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: 20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    layout
                  >
                    <Card className="w-48 p-3 bg-white">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{task.platform}</Badge>
                        <Badge
                          variant="outline"
                          className={
                            task.status === 'scheduled'
                              ? 'text-green-500'
                              : 'text-yellow-500'
                          }
                        >
                          {task.time}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium">{task.title}</p>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Calendar className="w-6 h-6" />
      </motion.div>
    </div>
  );
}

export function AnalyticsVisual() {
  const metrics = [
    { label: 'Total Engagement', value: '24.8K', change: '+12.3%' },
    { label: 'Total Likes', value: '12.4K', change: '+8.1%' },
    { label: 'Total Shares', value: '6.2K', change: '+15.3%' },
    { label: 'Link Clicks', value: '8.4K', change: '+9.2%' },
  ];

  const platformData = [
    { platform: 'LinkedIn', value: 85 },
    { platform: 'Twitter', value: 65 },
    { platform: 'Dev.to', value: 45 },
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6">
      <div className="grid gap-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {metrics.map((metric) => (
            <Card key={metric.label} className="p-3">
              <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
              <AnimatedMetric value={metric.value} change={metric.change} />
            </Card>
          ))}
        </div>

        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Platform Performance</h3>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </div>
            <AnimatedChart data={platformData} />
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-3">
            <h3 className="font-medium">AI-Powered Insights</h3>
            <AnimatedInsights />
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