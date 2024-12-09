'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Focus on Growing Your Business. Let Publishy Handle the Marketing.
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join hundreds of solopreneurs and startups who have already streamlined their marketing with Publishy.
        </p>
        <Button size="lg" asChild>
          <Link href="/signup">
            Try Publishy for Free <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  );
}