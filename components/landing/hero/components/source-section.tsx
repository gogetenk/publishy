'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rss, Search } from 'lucide-react';
import { RssFeed, Keyword } from '../types';

interface SourceSectionProps {
  selectedRssFeeds: RssFeed[];
  selectedKeywords: Keyword[];
}

export function SourceSection({ selectedRssFeeds, selectedKeywords }: SourceSectionProps) {
  return (
    <div className="mb-8 grid md:grid-cols-2 gap-4">
      <Card className="p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Rss className="w-5 h-5 text-orange-500" />
            <span className="font-medium">Content Sources</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedRssFeeds.map((feed) => (
              <Badge key={feed.url} variant="secondary">
                {feed.name}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
      <Card className="p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-sky-500" />
            <span className="font-medium">Trending Topics</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedKeywords.slice(0, 2).map((keyword) => (
              <Badge key={keyword.term} variant="secondary">
                {keyword.term}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}