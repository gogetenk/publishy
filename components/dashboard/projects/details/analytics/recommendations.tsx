'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Lightbulb } from 'lucide-react';

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
];

export function Recommendations() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recommendations</CardTitle>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50"
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