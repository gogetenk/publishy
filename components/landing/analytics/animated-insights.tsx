'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { useEffect, useState } from 'react';

const INSIGHTS = [
  'Posts between 9-11 AM receive 25% more engagement',
  'LinkedIn audience responds well to technical deep-dives',
  'Using 3-5 relevant hashtags increases reach by 40%',
  'Video content gets 2x more engagement than text-only',
  'Engagement peaks on Tuesdays and Wednesdays',
  'Posts with images see 150% more retweets'
];

export function AnimatedInsights() {
  const [visibleInsights, setVisibleInsights] = useState(INSIGHTS.slice(0, 2));

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleInsights(current => {
        const remaining = INSIGHTS.filter(insight => !current.includes(insight));
        const newInsight = remaining[Math.floor(Math.random() * remaining.length)];
        const updated = [...current];
        updated.shift();
        updated.push(newInsight);
        return updated;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-2">
      <AnimatePresence mode="popLayout">
        {visibleInsights.map((insight) => (
          <motion.div
            key={insight}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="flex items-start gap-2 p-2 bg-muted/50 rounded-lg"
          >
            <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5" />
            <span className="text-sm">{insight}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}