'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Task, STATUS_SEQUENCE } from '../types';

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'proposing': return 'text-blue-500';
      case 'reviewing': return 'text-yellow-500';
      case 'generating': return 'text-purple-500';
      case 'scheduling': return 'text-orange-500';
      case 'published': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <Card className="p-4 border-2 border-primary/10 hover:border-primary/20 transition-colors shadow-sm">
      <div className="flex items-center gap-4">
        {task.platform === 'Twitter' ? (
          <Twitter className="w-5 h-5 fill-gray-700 dark:fill-gray-300" strokeWidth={0} />
        ) : (
          <Linkedin className="w-5 h-5 fill-gray-700 dark:fill-gray-300" strokeWidth={0} />
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">{task.content}</p>
            <Badge variant="outline" className="text-xs">
              {task.source}
            </Badge>
          </div>
          <div className="mt-1">
            <span className={`text-xs font-medium ${getStatusColor(task.status)}`}>
              {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              {task.status === 'published' && (
                <CheckCircle2 className="inline-block w-3 h-3 ml-1" />
              )}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}