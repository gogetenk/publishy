'use client';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TaskAnimation } from '../../hero/task-animation';

export function AutomationSection() {
  const { t } = useTranslation();

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">{t('features.automation.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('features.automation.description')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 min-h-[600px] flex items-center justify-center"
          >
            <TaskAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
