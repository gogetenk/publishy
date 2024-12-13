'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { ProjectCard } from '../../projects/project-card';
import { EngagementChart } from '../../projects/engagement-chart';
import { useProjectAnimation } from './use-project-animation';
import { MOCK_PROJECTS } from './mock-data';

export function ProjectsVisual() {
  const { projects } = useProjectAnimation(MOCK_PROJECTS);

  return (
    <div className="relative w-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6">
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
        </div>
        <EngagementChart data={[45, 62, 58, 75, 82, 78, 90]} />
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