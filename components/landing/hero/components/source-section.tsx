'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rss, Search, Loader2 } from 'lucide-react';
import { RssFeed, Keyword } from '../types';
import { motion } from 'framer-motion';

interface SourceSectionProps {
  selectedRssFeeds: RssFeed[];
  selectedKeywords: Keyword[];
  isLoading: boolean;
}

export function SourceSection({ selectedRssFeeds, selectedKeywords, isLoading }: SourceSectionProps) {
  return (
    <div className="mb-8 grid md:grid-cols-2 gap-4">
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ 
          opacity: isLoading ? 0.5 : 1,
          scale: isLoading ? 0.98 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        <Card className="p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Rss className="w-5 h-5 text-orange-500" />
                <span className="font-medium">Content Sources</span>
              </div>
              {isLoading && (
                <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {!isLoading && selectedRssFeeds.map((feed) => (
                <Badge key={feed.url} variant="secondary">
                  {feed.name}
                </Badge>
              ))}
              {isLoading && (
                <div className="w-full text-sm text-muted-foreground">
                  Scanning RSS feeds...
                </div>
              )}
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ 
          opacity: isLoading ? 0.5 : 1,
          scale: isLoading ? 0.98 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        <Card className="p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-sky-500" />
                <span className="font-medium">Trending Topics</span>
              </div>
              {isLoading && (
                <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {!isLoading && selectedKeywords.map((keyword) => (
                <Badge key={keyword.term} variant="secondary">
                  {keyword.term}
                </Badge>
              ))}
              {isLoading && (
                <div className="w-full text-sm text-muted-foreground">
                  Analyzing trends...
                </div>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}