'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { CalendarHeader } from './calendar-header';
import { MonthView } from './month-view';
import { WeekView } from './week-view';
import { PostDetailsDialog } from './post-details-dialog';
import { ScheduledPost } from './types';

const MOCK_POSTS: ScheduledPost[] = [
  {
    id: '1',
    date: new Date(2024, 3, 15),
    title: 'Product Launch Announcement',
    platform: 'LinkedIn',
    status: 'scheduled',
    time: '09:00',
    content: `🚀 Exciting news! We're thrilled to announce the launch of our new product that will revolutionize how developers manage their social media presence.

Key features:
• AI-powered content generation
• Smart scheduling
• Cross-platform publishing
• Analytics dashboard

Join us on this journey! #ProductLaunch #TechStartup`,
  },
  {
    id: '2',
    date: new Date(2024, 3, 15),
    title: 'Tech Stack Deep Dive',
    platform: 'Twitter',
    status: 'draft',
    time: '14:00',
    content: `Behind the scenes of our tech stack:

▪️ Next.js for lightning-fast performance
▪️ AI-powered content generation
▪️ Real-time analytics
▪️ Serverless architecture

What's your favorite part of our stack? 🤔

#TechStack #WebDev #Engineering`,
  },
  {
    id: '3',
    date: new Date(2024, 3, 18),
    title: 'Weekly Developer Tips Newsletter',
    platform: 'LinkedIn',
    status: 'scheduled',
    time: '10:30',
    content: `This week's top developer productivity tips:

1. Automate your social media presence
2. Use AI to generate content ideas
3. Schedule posts during peak engagement times
4. Track performance with analytics

What are your favorite productivity hacks? Share below! 👇

#DeveloperTips #Productivity #SoftwareEngineering`,
  },
  {
    id: '4',
    date: new Date(2024, 3, 20),
    title: 'Community Spotlight',
    platform: 'Twitter',
    status: 'draft',
    time: '11:00',
    content: `Shoutout to our amazing developer community! 🌟

Your feedback and contributions make our platform better every day.

Special thanks to @dev_sarah for suggesting our latest feature!

#CommunityFirst #OpenSource`,
  },
  {
    id: '5',
    date: new Date(2024, 3, 22),
    title: 'Product Update Blog',
    platform: 'LinkedIn',
    status: 'scheduled',
    time: '13:00',
    content: `📢 New Features Alert!

We've just rolled out:
• Enhanced AI content suggestions
• Improved scheduling algorithm
• New analytics dashboard
• Integration with more platforms

Check out the full blog post for details!

#ProductUpdate #Innovation`,
  }
];

export function ContentCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const [posts, setPosts] = useState<ScheduledPost[]>(MOCK_POSTS);
  const [selectedPost, setSelectedPost] = useState<ScheduledPost | null>(null);
  const [isPostDetailsOpen, setIsPostDetailsOpen] = useState(false);

  const handlePostClick = (post: ScheduledPost) => {
    setSelectedPost(post);
    setIsPostDetailsOpen(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <CalendarHeader
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Schedule New Post</DialogTitle>
              <DialogDescription>
                Create a new post for {selectedDate.toLocaleDateString()}
              </DialogDescription>
            </DialogHeader>
            {/* Form will be implemented here */}
          </DialogContent>
        </Dialog>
      </div>

      {viewMode === 'month' ? (
        <MonthView
          selectedDate={selectedDate}
          posts={posts}
          onSelectDate={setSelectedDate}
          onPostClick={handlePostClick}
        />
      ) : (
        <WeekView
          selectedDate={selectedDate}
          posts={posts}
          onSelectDate={setSelectedDate}
          onPostClick={handlePostClick}
        />
      )}

      {selectedPost && (
        <PostDetailsDialog
          post={selectedPost}
          open={isPostDetailsOpen}
          onOpenChange={setIsPostDetailsOpen}
        />
      )}
    </div>
  );
}