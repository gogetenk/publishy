'use client';

import { RssFeed, Keyword } from './types';

export const RSS_FEEDS: RssFeed[] = [
  // Tech & Dev
  { name: 'TechCrunch', url: 'techcrunch.com/feed', category: 'tech' },
  { name: 'Dev.to', url: 'dev.to/feed', category: 'dev' },
  
  // Fitness & Wellness
  { name: 'MindBodyGreen', url: 'mindbodygreen.com/feed', category: 'fitness' },
  { name: 'WellAndGood', url: 'wellandgood.com/feed', category: 'fitness' },
  
  // Pets
  { name: 'DogTime', url: 'dogtime.com/feed', category: 'pets' },
  { name: 'PetMD', url: 'petmd.com/rss.xml', category: 'pets' },
  
  // Food & Cooking
  { name: 'FoodNetwork', url: 'foodnetwork.com/feed', category: 'food' },
  { name: 'Epicurious', url: 'epicurious.com/feed', category: 'food' },
  
  // Startup & Crypto
  { name: 'VentureBeat', url: 'venturebeat.com/feed', category: 'startup' },
  { name: 'CoinDesk', url: 'coindesk.com/feed', category: 'crypto' }
];

export const KEYWORDS: Keyword[] = [
  // Tech & Dev
  { term: 'AI', category: 'tech' },
  { term: 'Cloud Computing', category: 'tech' },
  { term: 'TypeScript', category: 'dev' },
  { term: 'DevOps', category: 'dev' },
  
  // Fitness & Wellness
  { term: 'Mindfulness', category: 'fitness' },
  { term: 'HIIT Workouts', category: 'fitness' },
  
  // Pets
  { term: 'Dog Training', category: 'pets' },
  { term: 'Pet Health', category: 'pets' },
  
  // Food & Cooking
  { term: 'Healthy Recipes', category: 'food' },
  { term: 'Meal Prep', category: 'food' },
  
  // Startup & Crypto
  { term: 'Startup Growth', category: 'startup' },
  { term: 'Venture Capital', category: 'startup' },
  { term: 'Bitcoin', category: 'crypto' },
  { term: 'DeFi', category: 'crypto' }
];