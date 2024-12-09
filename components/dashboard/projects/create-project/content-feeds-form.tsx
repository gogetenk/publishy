'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import { useState } from 'react';
import { ContentFeeds } from './types';

interface ContentFeedsFormProps {
  data: ContentFeeds;
  onComplete: (data: ContentFeeds) => void;
}

export function ContentFeedsForm({ data, onComplete }: ContentFeedsFormProps) {
  const [formData, setFormData] = useState<ContentFeeds>(data);
  const [newFeed, setNewFeed] = useState('');
  const [newKeyword, setNewKeyword] = useState('');

  const handleAddFeed = (e: React.FormEvent) => {
    e.preventDefault();
    if (newFeed && !formData.rssFeeds.includes(newFeed)) {
      setFormData({
        ...formData,
        rssFeeds: [...formData.rssFeeds, newFeed],
      });
      setNewFeed('');
    }
  };

  const handleAddKeyword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newKeyword && !formData.keywords.includes(newKeyword)) {
      setFormData({
        ...formData,
        keywords: [...formData.keywords, newKeyword],
      });
      setNewKeyword('');
    }
  };

  const handleRemoveFeed = (feed: string) => {
    setFormData({
      ...formData,
      rssFeeds: formData.rssFeeds.filter((f) => f !== feed),
    });
  };

  const handleRemoveKeyword = (keyword: string) => {
    setFormData({
      ...formData,
      keywords: formData.keywords.filter((k) => k !== keyword),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="space-y-4">
        <Label>RSS Feeds</Label>
        <form onSubmit={handleAddFeed} className="flex gap-2">
          <Input
            placeholder="Enter RSS feed URL"
            value={newFeed}
            onChange={(e) => setNewFeed(e.target.value)}
            type="url"
          />
          <Button type="submit" variant="secondary">
            Add
          </Button>
        </form>
        <div className="flex flex-wrap gap-2">
          {formData.rssFeeds.map((feed) => (
            <Badge key={feed} variant="secondary" className="pr-1">
              {feed}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-2 hover:bg-transparent"
                onClick={() => handleRemoveFeed(feed)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label>Keywords</Label>
        <form onSubmit={handleAddKeyword} className="flex gap-2">
          <Input
            placeholder="Enter keyword"
            value={newKeyword}
            onChange={(e) => setNewKeyword(e.target.value)}
          />
          <Button type="submit" variant="secondary">
            Add
          </Button>
        </form>
        <div className="flex flex-wrap gap-2">
          {formData.keywords.map((keyword) => (
            <Badge key={keyword} variant="secondary" className="pr-1">
              {keyword}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-2 hover:bg-transparent"
                onClick={() => handleRemoveKeyword(keyword)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
}