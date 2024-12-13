'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Palette, Type } from 'lucide-react';

interface ProjectBrandCardProps {
  name: string;
  font: string;
  colors: string[];
  index: number;
}

export function ProjectBrandCard({ name, font, colors, index }: ProjectBrandCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium" style={{ fontFamily: font }}>{name}</h3>
          <Type className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-2">
          <Palette className="h-4 w-4 text-muted-foreground" />
          <div className="flex gap-1">
            {colors.map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        <div 
          className="h-2 rounded-full"
          style={{ 
            background: `linear-gradient(to right, ${colors.join(', ')})` 
          }}
        />
      </Card>
    </motion.div>
  );
}