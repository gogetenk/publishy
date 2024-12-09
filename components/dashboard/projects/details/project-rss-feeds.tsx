'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface RssFeed {
  id: string;
  url: string;
  name: string;
  active: boolean;
}

const MOCK_FEEDS: RssFeed[] = [
  {
    id: '1',
    url: 'https://dev.to/feed/tag/webdev',
    name: 'Dev.to Web Development',
    active: true,
  },
  {
    id: '2',
    url: 'https://www.infoq.com/feed',
    name: 'InfoQ Technology News',
    active: true,
  },
  {
    id: '3',
    url: 'https://hackernoon.com/feed',
    name: 'Hackernoon',
    active: false,
  },
];

interface ProjectRssFeedsProps {
  projectId: string;
}

export function ProjectRssFeeds({ projectId }: ProjectRssFeedsProps) {
  const [feeds, setFeeds] = useState<RssFeed[]>(MOCK_FEEDS);
  const [newFeedUrl, setNewFeedUrl] = useState('');

  const handleAddFeed = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFeedUrl) return;

    const newFeed: RssFeed = {
      id: Date.now().toString(),
      url: newFeedUrl,
      name: 'New Feed',
      active: true,
    };

    setFeeds([...feeds, newFeed]);
    setNewFeedUrl('');
  };

  const handleToggleFeed = (id: string) => {
    setFeeds(feeds.map(feed => 
      feed.id === id ? { ...feed, active: !feed.active } : feed
    ));
  };

  const handleDeleteFeed = (id: string) => {
    setFeeds(feeds.filter(feed => feed.id !== id));
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Add RSS Feed</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddFeed} className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor="feedUrl" className="sr-only">Feed URL</Label>
              <Input
                id="feedUrl"
                placeholder="Enter RSS feed URL"
                value={newFeedUrl}
                onChange={(e) => setNewFeedUrl(e.target.value)}
              />
            </div>
            <Button type="submit">
              <Plus className="h-4 w-4 mr-2" />
              Add Feed
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Feeds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {feeds.map((feed) => (
              <div
                key={feed.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="space-y-1">
                  <div className="font-medium">{feed.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {feed.url}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={feed.active}
                      onCheckedChange={() => handleToggleFeed(feed.id)}
                    />
                    <span className="text-sm text-muted-foreground">
                      {feed.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteFeed(feed.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}