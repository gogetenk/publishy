'use client';

import { Header } from '@/components/landing/sections/header';
import { HeroSection } from '@/components/landing/sections/hero-section';
import { FeatureSection } from '@/components/landing/feature-section';
import { AIVisual, BrandingVisual, ProjectsVisual, AnalyticsVisual } from '@/components/landing/feature-visuals';
import { TestimonialsSection } from '@/components/landing/sections/testimonials-section';
import { PricingSection } from '@/components/landing/sections/pricing-section';
import { CTASection } from '@/components/landing/sections/cta-section';
import { Footer } from '@/components/landing/sections/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection />

        {/* Feature Sections */}
        <div id="features">
          <FeatureSection
            headline="Publishy Handles Everything – From Ideas to Publishing"
            description="Publishy doesn't just create stunning social media posts and SEO-optimized blogs; it listens to the web for trending topics, scans RSS feeds, and uses your keywords to craft content perfectly aligned with the latest news and your audience's interests. All of this is scheduled and published at the best times – completely on autopilot."
            visual={<AIVisual />}
          />
          
          <FeatureSection
            headline="Consistent Branding Across All Your Projects"
            description="Define your brand's colors, fonts, and tone once, and Publishy ensures every post is professional and perfectly aligned with your identity – no matter how many projects you manage."
            visual={<BrandingVisual />}
            reversed
          />
          
          <FeatureSection
            headline="Effortlessly Manage All Your Projects"
            description="Whether you're juggling one idea or ten, Publishy keeps all your projects organized and their marketing on track. Switch between projects seamlessly, each with its own tailored and on-brand content pipeline."
            visual={<ProjectsVisual />}
          />
          
          <FeatureSection
            headline="Track Performance and Optimize Your Strategy"
            description="Get actionable insights into your content's performance with Publishy's analytics. Monitor engagement, growth, and what resonates with your audience – so you can focus on what drives results."
            visual={<AnalyticsVisual />}
            reversed
          />
        </div>

        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}