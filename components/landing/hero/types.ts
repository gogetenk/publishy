'use client';

export interface RssFeed {
  name: string;
  url: string;
  category: 'tech' | 'dev' | 'pets' | 'fitness' | 'food' | 'startup';
}

export interface Keyword {
  term: string;
  category: 'tech' | 'dev' | 'pets' | 'fitness' | 'food' | 'startup';
}

export interface Task {
  id: string;
  platform: 'Twitter' | 'LinkedIn';
  status: 'proposing' | 'reviewing' | 'generating' | 'scheduling' | 'published';
  content: string;
  source: string;
}

export const STATUS_SEQUENCE = ['proposing', 'reviewing', 'generating', 'scheduling', 'published'] as const;