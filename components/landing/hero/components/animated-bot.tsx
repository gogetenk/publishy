'use client';

import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

interface AnimatedBotProps {
  position: number;
  isCompleted: boolean;
}

export function AnimatedBot({ position, isCompleted }: AnimatedBotProps) {
  return (
    <motion.div
      className="absolute -right-6 -top-6"
      animate={{ 
        y: position * 100,
        scale: isCompleted ? [1, 1.2, 1] : [1, 1.1, 1],
        rotate: isCompleted 
          ? [0, 360, 720, 1080] 
          : [0, 5, -5, 0]
      }}
      transition={{ 
        y: { type: "spring", stiffness: 100 },
        scale: { 
          duration: isCompleted ? 0.5 : 1, 
          repeat: isCompleted ? 0 : Infinity 
        },
        rotate: { 
          duration: isCompleted ? 1.5 : 2, 
          repeat: isCompleted ? 0 : Infinity,
          ease: isCompleted ? "easeInOut" : "linear"
        }
      }}
    >
      <div className="bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
        <Bot className="w-6 h-6" />
      </div>
    </motion.div>
  );
}