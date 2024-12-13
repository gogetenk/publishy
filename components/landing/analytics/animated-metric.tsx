'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedMetricProps {
  value: string;
  change: string;
  animate?: boolean;
}

export function AnimatedMetric({ value, change, animate = true }: AnimatedMetricProps) {
  const [currentValue, setCurrentValue] = useState(value);
  const controls = useAnimationControls();

  useEffect(() => {
    if (!animate) return;

    const interval = setInterval(() => {
      // Randomly adjust the value up or down by 1-3%
      const adjustment = (Math.random() * 0.03) * (Math.random() > 0.5 ? 1 : -1);
      const baseValue = parseFloat(value.replace(/[^0-9.]/g, ''));
      const newValue = (baseValue * (1 + adjustment)).toFixed(1);
      setCurrentValue(value.replace(/[\d.]+/, newValue));

      // Animate the container
      controls.start({
        scale: [1, 1.02, 1],
        transition: { duration: 0.3 }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [value, animate, controls]);

  return (
    <motion.div animate={controls}>
      <div className="text-xl font-bold">{currentValue}</div>
      <div className="text-xs text-green-500">{change}</div>
    </motion.div>
  );
}