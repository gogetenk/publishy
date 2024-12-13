'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function PlanCard({ plan }: { plan: PlanProps }) {
  const { t } = useTranslation();

  return (
    <Card className={plan.popular ? 'border-primary relative' : ''}>
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold">
            {plan.price === '0' ? t('pricing.free') : `€${plan.price}`}
          </span>
          {plan.price !== '0' && (
            <span className="text-muted-foreground">/month</span>
          )}
        </div>
        <p className="text-muted-foreground mb-6">{plan.description}</p>
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          className="w-full"
          variant={plan.popular ? 'default' : 'outline'}
          asChild
        >
          <Link href="/signup">{t('common.getStarted')}</Link>
        </Button>
      </div>
    </Card>
  );
}