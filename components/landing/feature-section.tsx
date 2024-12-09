'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureSectionProps {
  headline: string;
  description: string;
  visual: React.ReactNode;
  reversed?: boolean;
}

export function FeatureSection({ headline, description, visual, reversed }: FeatureSectionProps) {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center`}>
          {!reversed ? (
            <>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">{headline}</h2>
                <p className="text-xl text-muted-foreground">{description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square"
              >
                {visual}
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square md:order-2"
              >
                {visual}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6 md:order-1"
              >
                <h2 className="text-3xl font-bold">{headline}</h2>
                <p className="text-xl text-muted-foreground">{description}</p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}