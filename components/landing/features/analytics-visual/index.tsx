'use client';

import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { AnimatedMetric } from '../../analytics/animated-metric';
import { AnimatedChart } from '../../analytics/animated-chart';
import { AnimatedInsights } from '../../analytics/animated-insights';
import { METRICS, PLATFORM_DATA } from './mock-data';
import { useTranslation } from 'react-i18next';

export function AnalyticsVisual() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6">
      <div className="grid gap-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {METRICS.map((metric) => (
            <Card key={metric.label} className="p-3">
              <div className="text-sm text-muted-foreground mb-1">
                {t(`analytics.metrics.${metric.label}`)}
              </div>
              <AnimatedMetric value={metric.value} change={metric.change} />
            </Card>
          ))}
        </div>

        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{t('analytics.platformPerformance')}</h3>
              <BarChart2 className="h-4 w-4 text-muted-foreground" />
            </div>
            <AnimatedChart data={PLATFORM_DATA} />
          </div>
        </Card>

        <Card className="p-4">
          <div className="space-y-3">
            <h3 className="font-medium">{t('analytics.insights')}</h3>
            <AnimatedInsights />
          </div>
        </Card>
      </div>

      <motion.div
        className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <BarChart2 className="w-6 h-6" />
      </motion.div>
    </div>
  );
}