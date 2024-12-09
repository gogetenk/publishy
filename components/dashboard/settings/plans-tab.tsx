'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Freemium',
    price: '0',
    description: 'Perfect for trying out Publishy',
    features: [
      '1 project',
      '10 posts per month',
      'Basic analytics',
      'Standard support',
    ],
    popular: false,
  },
  {
    name: 'Starter',
    price: '20',
    description: 'Great for small projects',
    features: [
      '1 project',
      '30 posts per month',
      'Advanced analytics',
      'Priority support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '50',
    description: 'Perfect for growing teams',
    features: [
      '3 projects',
      '100 posts per month',
      '3 blog management',
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
      'Unlimited projects',
      'Unlimited posts',
      'Custom API integration',
      'Advanced analytics',
      '24/7 support',
      'Custom branding',
      'Custom workflows',
    ],
    popular: false,
  },
];

const ADD_ONS = [
  {
    name: 'Advanced Branding',
    price: '50',
    description: 'One-time setup fee',
    features: [
      'Custom color schemes',
      'Font customization',
      'Logo integration',
      'Brand voice settings',
    ],
  },
  {
    name: 'External Integrations',
    price: '10',
    description: 'Monthly',
    features: [
      'Zapier integration',
      'Hootsuite integration',
      'Custom webhooks',
      'API access',
    ],
  },
  {
    name: 'Advanced Analytics',
    price: '20',
    description: 'Monthly',
    features: [
      'Custom reports',
      'Engagement tracking',
      'ROI analysis',
      'Competitor tracking',
    ],
  },
];

export function PlansTab() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PLANS.map((plan) => (
          <Card key={plan.name} className={plan.popular ? 'border-primary' : ''}>
            <CardHeader>
              <CardTitle>
                {plan.name}
                {plan.popular && (
                  <span className="ml-2 text-xs text-primary">Popular</span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <span className="text-3xl font-bold">€{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Add-ons</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {ADD_ONS.map((addon) => (
            <Card key={addon.name}>
              <CardHeader>
                <CardTitle className="text-lg">{addon.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <span className="text-2xl font-bold">€{addon.price}</span>
                    <span className="text-muted-foreground">
                      /{addon.description}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {addon.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    Add to Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}