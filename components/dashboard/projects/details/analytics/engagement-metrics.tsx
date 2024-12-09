'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, BarChart2, ThumbsUp, Share2, MousePointerClick } from 'lucide-react';

const metrics = [
  {
    title: 'Total Engagement',
    value: '12.5K',
    change: '+12.3%',
    icon: BarChart2,
  },
  {
    title: 'Total Likes',
    value: '5.2K',
    change: '+8.1%',
    icon: ThumbsUp,
  },
  {
    title: 'Total Shares',
    value: '2.1K',
    change: '+15.3%',
    icon: Share2,
  },
  {
    title: 'Link Clicks',
    value: '3.8K',
    change: '+9.2%',
    icon: MousePointerClick,
  },
];

export function EngagementMetrics() {
  return (
    <>
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
              {metric.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}