'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AIContentShowcase } from '../ai-generation/ai-content-showcase';

export function AIGenerationSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('aiGeneration.title', 'AI-Powered Content Creation')}
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('aiGeneration.subtitle', 'Generate unique text, images, and videos for each platform with our advanced AI')}
          </motion.p>
        </div>

        <AIContentShowcase />
      </div>
    </section>
  );
}