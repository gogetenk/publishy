'use client';

import { motion } from 'framer-motion';
import { Twitter, Instagram, Mail, Linkedin, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Task } from '../types';

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

  const getPlatformIcon = () => {
    switch (task.platform) {
      case 'Twitter':
        return <Twitter className="w-5 h-5 fill-gray-700 dark:fill-gray-300" strokeWidth={0} />;
      case 'Instagram':
        return <Instagram className="w-5 h-5 fill-gray-700 stroke-white dark:fill-gray-300" strokeWidth={1} />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5 fill-gray-700 dark:fill-gray-300" strokeWidth={1} />;
      case 'Newsletter':
        return <Mail className="w-5 h-5 fill-gray-700 stroke-white dark:fill-gray-300" strokeWidth={1} />;
      case 'Blog':
        return <FileText className="w-5 h-5 fill-gray-700 dark:fill-gray-300" strokeWidth={1} />;
      default:
        return null;
    }
  };

  return (
    <Card className="p-4 border-2 border-primary/10 hover:border-primary/20 transition-colors shadow-sm">
      <div className="flex items-center gap-4">
        {getPlatformIcon()}
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
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}