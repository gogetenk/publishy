'use client';

import { useState, useEffect } from 'react';
import { PREDEFINED_TASK_NAMES } from './mock-data';

export function useProjectAnimation(initialProjects: any[]) {
  const [projects, setProjects] = useState(initialProjects);
  const taskNameIndex = { current: 0 };

  function getNextTaskName() {
    const name = PREDEFINED_TASK_NAMES[taskNameIndex.current % PREDEFINED_TASK_NAMES.length];
    taskNameIndex.current += 1;
    return name;
  }

  function generateNewTask(project: any) {
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
          if (project.justRemovedTask) {
            const newTask = generateNewTask(project);
            return {
              ...project,
              tasks: [...project.tasks, newTask],
              justRemovedTask: false
            };
          }

          if (project.tasks.length === 0) {
            return {
              ...project,
              progress: Math.floor(Math.random() * 40),
              tasks: initialProjects.find(p => p.name === project.name)?.tasks || [],
              justRemovedTask: false
            };
          }

          const newProgress = project.progress + 2;

          if (newProgress >= 100) {
            const [, ...remainingTasks] = project.tasks;
            return {
              ...project,
              progress: Math.floor(Math.random() * 40),
              tasks: remainingTasks,
              justRemovedTask: true
            };
          }

          return {
            ...project,
            progress: newProgress
          };
        });
      });
    }, 200);

    return () => clearInterval(interval);
  }, [initialProjects]);

  return { projects };
}