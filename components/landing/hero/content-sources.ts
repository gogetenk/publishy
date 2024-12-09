'use client';

import { RssFeed, Keyword } from './types';

export const RSS_FEEDS: RssFeed[] = [
  // Tech & Dev
  { name: 'TechCrunch', url: 'techcrunch.com/feed', category: 'tech' },
  { name: 'Dev.to', url: 'dev.to/feed', category: 'dev' },
  
  // Pet Care
  { name: 'DogTime', url: 'dogtime.com/feed', category: 'pets' },
  { name: 'PetMD', url: 'petmd.com/rss.xml', category: 'pets' },
  
  // Fitness & Wellness
  { name: 'MindBodyGreen', url: 'mindbodygreen.com/feed', category: 'fitness' },
  { name: 'WellAndGood', url: 'wellandgood.com/feed', category: 'fitness' },
  
  // Food & Cooking
  { name: 'FoodNetwork', url: 'foodnetwork.com/feed', category: 'food' },
  { name: 'Epicurious', url: 'epicurious.com/feed', category: 'food' },
  
  // Startups
  { name: 'VentureBeat', url: 'venturebeat.com/feed', category: 'startup' },
  { name: 'StartupDaily', url: 'startupdaily.net/feed', category: 'startup' },
];

export const KEYWORDS: Keyword[] = [
  // Tech & Dev
  { term: '#webdev', category: 'dev' },
  { term: '#typescript', category: 'dev' },
  
  // Pet Care
  { term: '#dogtraining', category: 'pets' },
  { term: '#petcare', category: 'pets' },
  
  // Fitness & Wellness
  { term: '#wellness', category: 'fitness' },
  { term: '#mindfulness', category: 'fitness' },
  
  // Food & Cooking
  { term: '#foodie', category: 'food' },
  { term: '#homecooking', category: 'food' },
  
  // Startups
  { term: '#startup', category: 'startup' },
  { term: '#entrepreneurship', category: 'startup' },
];