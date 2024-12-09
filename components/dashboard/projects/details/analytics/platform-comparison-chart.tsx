'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    platform: 'LinkedIn',
    likes: 2450,
    shares: 890,
    comments: 420,
    clicks: 1200,
  },
  {
    platform: 'Twitter',
    likes: 1890,
    shares: 1200,
    comments: 680,
    clicks: 950,
  },
  {
    platform: 'Dev.to',
    likes: 980,
    shares: 450,
    comments: 320,
    clicks: 780,
  },
];

export function PlatformComparisonChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Platform Performance Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="platform"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={40}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--muted))' }}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
                padding: '8px',
              }}
            />
            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              formatter={(value) => (
                <span style={{ color: 'hsl(var(--foreground))' }}>{value}</span>
              )}
            />
            <Bar
              dataKey="likes"
              name="Likes"
              fill="hsl(var(--chart-1))"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="shares"
              name="Shares"
              fill="hsl(var(--chart-2))"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="comments"
              name="Comments"
              fill="hsl(var(--chart-3))"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="clicks"
              name="Clicks"
              fill="hsl(var(--chart-4))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}