'use client';

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
  { name: 'Mon', likes: 120, shares: 45, comments: 30 },
  { name: 'Tue', likes: 160, shares: 55, comments: 40 },
  { name: 'Wed', likes: 180, shares: 70, comments: 50 },
  { name: 'Thu', likes: 140, shares: 45, comments: 35 },
  { name: 'Fri', likes: 200, shares: 85, comments: 60 },
  { name: 'Sat', likes: 150, shares: 50, comments: 40 },
  { name: 'Sun', likes: 170, shares: 65, comments: 45 },
];

export function EngagementChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => value}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
          width={40}
        />
        <Tooltip 
          cursor={{ fill: 'hsl(var(--muted))' }}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '6px',
            padding: '8px'
          }}
        />
        <Legend 
          verticalAlign="top"
          height={36}
          iconType="circle"
          formatter={(value) => <span style={{ color: 'hsl(var(--foreground))' }}>{value}</span>}
        />
        <Bar
          dataKey="likes"
          name="Likes"
          fill="hsl(var(--chart-1))"
          radius={[4, 4, 0, 0]}
          maxBarSize={40}
        />
        <Bar
          dataKey="shares"
          name="Shares"
          fill="hsl(var(--chart-2))"
          radius={[4, 4, 0, 0]}
          maxBarSize={40}
        />
        <Bar
          dataKey="comments"
          name="Comments"
          fill="hsl(var(--chart-3))"
          radius={[4, 4, 0, 0]}
          maxBarSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}