'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface EngagementChartProps {
  data: number[];
}

export function EngagementChart({ data }: EngagementChartProps) {
  const maxValue = Math.max(...data);

  return (
    <Card className="p-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Overall Engagement</h3>
        <div className="h-24 flex items-end gap-1">
          {data.map((value, index) => (
            <motion.div
              key={index}
              className="flex-1 bg-primary/20 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${(value / maxValue) * 100}%` }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}