'use client';

import { RssFeed, Keyword } from './types';

const templates = {
  tech: [
    ['Breaking: Latest developments in {topic}', 'Tech trends: {topic} evolution', 'What\'s new in {topic}'],
    ['Exploring innovations in {topic}', '{topic} market analysis', 'The rise of {topic}'],
    ['Deep dive into {topic}', '{topic} ecosystem updates', 'Understanding {topic}']
  ],
  dev: [
    ['How to improve your {topic} workflow', 'Mastering {topic}', '{topic} best practices'],
    ['Advanced {topic} techniques', 'Building with {topic}', '{topic} optimization tips'],
    ['Modern {topic} development', '{topic} architecture patterns', 'Scaling with {topic}']
  ],
  pets: [
    ['Your guide to {topic}', 'Essential {topic} tips', 'Transform your {topic} experience'],
    ['Expert advice: {topic} made easy', 'The ultimate {topic} guide', 'Revolutionizing {topic}'],
    ['Fun and effective {topic} methods', '{topic} success stories', 'Modern approach to {topic}']
  ],
  fitness: [
    ['Transform your life with {topic}', 'The science behind {topic}', 'Master your {topic} journey'],
    ['Expert {topic} techniques', 'Revolutionary {topic} methods', 'Optimize your {topic} routine'],
    ['The future of {topic}', 'Breakthrough in {topic}', 'Next-level {topic} strategies']
  ],
  food: [
    ['Delicious {topic} recipes', 'Master the art of {topic}', 'Elevate your {topic} game'],
    ['Secret {topic} techniques', 'Traditional vs modern {topic}', 'The perfect {topic} guide'],
    ['Trending: {topic} innovations', 'Reimagining {topic}', 'Global {topic} inspirations']
  ],
  startup: [
    ['Growth Strategy: Scaling {topic}', 'Launching your {topic}', '{topic} success stories'],
    ['Innovating with {topic}', '{topic} market opportunities', 'Building a {topic} business'],
    ['{topic} funding insights', 'Expanding your {topic}', '{topic} growth metrics']
  ],
};

export function generateTaskContent(source: RssFeed | Keyword, loopCount: number): string {
  const categoryTemplates = templates[source.category];
  const templateSet = categoryTemplates[loopCount % categoryTemplates.length];
  const template = templateSet[Math.floor(Math.random() * templateSet.length)];
  const topic = 'term' in source ? source.term : source.name;

  return template.replace('{topic}', topic);
}