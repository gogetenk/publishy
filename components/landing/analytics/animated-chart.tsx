'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedChartProps {
  data: Array<{ platform: string; value: number }>;
}

export function AnimatedChart({ data: initialData }: AnimatedChartProps) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(currentData => 
        currentData.map(item => ({
          ...item,
          value: Math.min(100, Math.max(20, 
            item.value + (Math.random() * 20 - 10)
          ))
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[120px] flex items-end gap-2">
      {data.map((platform) => (
        <div key={platform.platform} className="flex-1 flex flex-col items-center gap-2">
          <motion.div
            className="w-full bg-primary/20 rounded-t"
            initial={{ height: 0 }}
            animate={{ height: `${platform.value}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <span className="text-xs text-muted-foreground">{platform.platform}</span>
        </div>
      ))}
    </div>
  );
}