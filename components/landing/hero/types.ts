'use client';

export interface RssFeed {
  name: string;
  url: string;
  category: 'tech' | 'dev' | 'startup' | 'crypto' | 'fitness' | 'pets' | 'food';
}

export interface Keyword {
  term: string;
  category: 'tech' | 'dev' | 'startup' | 'crypto' | 'fitness' | 'pets' | 'food';
}

export interface Task {
  id: string;
  platform: 'Twitter' | 'LinkedIn' | 'Instagram' | 'Newsletter' | 'Blog';
  status: 'proposing' | 'reviewing' | 'generating' | 'scheduling' | 'published';
  content: string;
  source: string;
}

export const STATUS_SEQUENCE = ['proposing', 'reviewing', 'generating', 'scheduling', 'published'] as const;