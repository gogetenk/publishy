'use client';

import { motion } from 'framer-motion';
import { Bot, Sparkles, Loader } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function AIGenerationProgress() {
  return (
    <Card className="p-8 max-w-md w-full">
      <div className="space-y-6">
        <div className="flex justify-center">
          <motion.div
            className="relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Bot className="w-8 h-8 text-primary" />
            </div>
            <Loader className="w-16 h-16 text-primary/20" />
          </motion.div>
        </div>

        <div className="space-y-2 text-center">
          <h3 className="font-semibold">Generating Content</h3>
          <p className="text-sm text-muted-foreground">
            Our AI is crafting unique content tailored to your brand
          </p>
        </div>

        <div className="space-y-3">
          <motion.div
            className="h-1 bg-primary/20 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="flex justify-between text-xs text-muted-foreground">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Analyzing brand voice
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-500" />
            </motion.span>
          </div>
        </div>
      </div>
    </Card>
  );
}