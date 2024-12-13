'use client';

import { Header } from '@/components/landing/sections/header';
import { HeroSection } from '@/components/landing/sections/hero-section';
import { FeatureSection } from '@/components/landing/feature-section';
import { SocialProofSection } from '@/components/landing/sections/social-proof-section';
import { 
  AIVisual, 
  BrandingVisual, 
  ProjectsVisual, 
  AnalyticsVisual 
} from '@/components/landing/feature-visuals';
import { TestimonialsSection } from '@/components/landing/sections/testimonials-section';
import { PricingSection } from '@/components/landing/sections/pricing-section';
import { CTASection } from '@/components/landing/sections/cta-section';
import { Footer } from '@/components/landing/sections/footer';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <SocialProofSection />

        <div id="features">
          <FeatureSection
            headline={t('features.automation.title')}
            description={t('features.automation.description')}
            visual={<AIVisual />}
          />
          
                    {/* <FeatureSection
            headline="Consistent Branding Across All Your Projects"
            description="Define your brand's colors, fonts, and tone once, and Publishy ensures every post is professional and perfectly aligned with your identity – no matter how many projects you manage."
            visual={<BrandingVisual />}
            reversed
          /> */}
          
          
          <FeatureSection
            headline={t('features.management.title')}
            description={t('features.management.description')}
            visual={<ProjectsVisual />}
          />
          
          <FeatureSection
            headline={t('features.analytics.title')}
            description={t('features.analytics.description')}
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