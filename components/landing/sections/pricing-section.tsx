'use client';

import { useTranslation } from 'react-i18next';
import { PlanCard } from '../pricing/plan-card';

export function PricingSection() {
  const { t } = useTranslation();

  interface Plan {
    name: string;
    description: string;
    features: string[];
    price: string;
    popular?: boolean;
  }

  const plans = [
    {
      ...t('pricing.plans.free', { returnObjects: true }),
      price: '0',
    },
    {
      ...t('pricing.plans.starter', { returnObjects: true }),
      price: '20',
    },
    {
      ...t('pricing.plans.pro', { returnObjects: true }),
      price: '50',
      popular: true,
    },
    {
      ...t('pricing.plans.business', { returnObjects: true }),
      price: '150',
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-xl text-muted-foreground">
            {t('pricing.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}