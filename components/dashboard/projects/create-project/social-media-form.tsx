'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { SocialMedia } from './types';

const PLATFORMS = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'Dev.to'];
const POSTING_SCHEDULES = ['daily', 'weekly', 'custom'];
const TIMEZONES = [
  'UTC',
  'America/New_York',
  'Europe/London',
  'Asia/Tokyo',
  'Australia/Sydney',
];

interface SocialMediaFormProps {
  data: SocialMedia;
  onComplete: (data: SocialMedia) => void;
}

export function SocialMediaForm({ data, onComplete }: SocialMediaFormProps) {
  const [formData, setFormData] = useState<SocialMedia>(data);

  const handleTogglePlatform = (platform: string) => {
    setFormData({
      ...formData,
      platforms: formData.platforms.includes(platform)
        ? formData.platforms.filter((p) => p !== platform)
        : [...formData.platforms, platform],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4">
      <div className="space-y-4">
        <Label>Social Media Platforms</Label>
        <div className="flex flex-wrap gap-2">
          {PLATFORMS.map((platform) => (
            <Button
              key={platform}
              type="button"
              variant={
                formData.platforms.includes(platform) ? 'default' : 'outline'
              }
              onClick={() => handleTogglePlatform(platform)}
            >
              {platform}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label htmlFor="postingSchedule">Posting Schedule</Label>
        <Select
          value={formData.postingSchedule}
          onValueChange={(value) =>
            setFormData({ ...formData, postingSchedule: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select schedule" />
          </SelectTrigger>
          <SelectContent>
            {POSTING_SCHEDULES.map((schedule) => (
              <SelectItem key={schedule} value={schedule}>
                {schedule.charAt(0).toUpperCase() + schedule.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <Label htmlFor="timeZone">Time Zone</Label>
        <Select
          value={formData.timeZone}
          onValueChange={(value) => setFormData({ ...formData, timeZone: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select time zone" />
          </SelectTrigger>
          <SelectContent>
            {TIMEZONES.map((timezone) => (
              <SelectItem key={timezone} value={timezone}>
                {timezone}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
}