'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

interface EngagementTrendsProps {
  projectId: string; // Ajoutez cette ligne
}

const data = [
  { date: 'Mar 1', engagement: 2400 },
  { date: 'Mar 5', engagement: 3600 },
  { date: 'Mar 10', engagement: 3200 },
  { date: 'Mar 15', engagement: 4500 },
  { date: 'Mar 20', engagement: 4200 },
  { date: 'Mar 25', engagement: 5800 },
  { date: 'Mar 30', engagement: 6000 },
];

export function EngagementTrends({ projectId }: EngagementTrendsProps) {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Engagement Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <XAxis
                dataKey="date"
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
                tickFormatter={(value) => `${value}`}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Date
                            </span>
                            <span className="font-bold">
                              {payload[0].payload.date}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-muted-foreground">
                              Engagement
                            </span>
                            <span className="font-bold">
                              {payload[0].value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="engagement"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                stroke="hsl(var(--primary))"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}