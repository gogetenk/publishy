'use client';

import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6" />
          <span className="text-xl font-bold">Publishy</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-muted-foreground hover:text-primary">
            Features
          </Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-primary">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-primary">
            Testimonials
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}