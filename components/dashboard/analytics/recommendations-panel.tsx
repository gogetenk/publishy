'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

interface PlatformComparisonProps {
  projectId: string; // Ajoutez cette ligne
}

const recommendations = [
  {
    id: 1,
    title: 'Optimal Posting Times',
    description:
      'Your content receives higher engagement when posted between 9 AM and 11 AM. Consider scheduling more posts during these hours.',
  },
  {
    id: 2,
    title: 'Content Length',
    description:
      'Posts with 150-200 words perform 25% better than shorter posts. Try to maintain this length for future content.',
  },
  {
    id: 3,
    title: 'Hashtag Usage',
    description:
      'Posts with 3-5 relevant hashtags show better reach. Include trending tech hashtags like #WebDev and #TechNews.',
  },
  {
    id: 4,
    title: 'Platform Focus',
    description:
      'LinkedIn posts are performing exceptionally well. Consider increasing your presence on this platform.',
  },
];

export function RecommendationsPanel({ projectId }: PlatformComparisonProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50"
            >
              <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>
                <h4 className="font-medium mb-1">{rec.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {rec.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}