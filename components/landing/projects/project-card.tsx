'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Calendar, BarChart2 } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  platforms: string[];
  stats: {
    scheduledPosts: number;
    engagementRate: number;
  };
  index: number;
}

export function ProjectCard({ name, description, platforms, stats, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-4 space-y-3">
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex gap-1">
          {platforms.map((platform) => (
            <Badge key={platform} variant="secondary" className="text-xs">
              {platform}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <Calendar className="w-3 h-3" />
              Scheduled Posts
            </div>
            <div className="text-lg font-semibold">{stats.scheduledPosts}</div>
          </div>
          <div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
              <BarChart2 className="w-3 h-3" />
              Engagement
            </div>
            <div className="text-lg font-semibold">{stats.engagementRate}%</div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}