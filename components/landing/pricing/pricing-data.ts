'use client';

import { Plan } from './types';

export const PRICING_PLANS: Plan[] = [
  {
    name: 'Freemium',
    price: '0',
    description: 'Perfect for trying out Publishy',
    features: [
      '1 post per month',
      '1 social media platform',
      'Basic analytics',
      'Community support',
    ],
  },
  {
    name: 'Starter',
    price: '20',
    description: 'Great for small projects',
    features: [
      '30 posts per month',
      '1 project',
      'All social platforms',
      'Advanced analytics',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '50',
    description: 'Perfect for growing teams',
    features: [
      '100 posts per month',
      '3 projects',
      'All social platforms',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
    ],
    popular: true,
  },
  {
    name: 'Business',
    price: '150',
    description: 'For large scale operations',
    features: [
      'Unlimited posts',
      'Unlimited projects',
      'All social platforms',
      'Advanced analytics',
      'API access',
      '24/7 support',
      'Custom workflows',
    ],
  },
];