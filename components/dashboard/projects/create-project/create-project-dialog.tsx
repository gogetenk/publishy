'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { ProjectBasicsForm } from './project-basics-form';
import { BrandingSetupForm } from './branding-setup-form';
import { ContentFeedsForm } from './content-feeds-form';
import { SocialMediaForm } from './social-media-form';
import { ProjectReview } from './project-review';
import { useRouter } from 'next/navigation';
import { ProjectFormData } from './types';

const STEPS = [
  'Project Basics',
  'Branding Setup',
  'Content Feeds',
  'Social Media',
  'Review',
];

export function CreateProjectDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<ProjectFormData>({
    basics: {
      name: '',
      description: '',
      industry: '',
      targetAudience: '',
      brandTone: '',
    },
    branding: {
      logo: '',
      primaryColor: '#000000',
      secondaryColor: '#ffffff',
      font: 'Inter',
      voiceStyle: [],
      ctaTemplates: [],
    },
    contentFeeds: {
      rssFeeds: [],
      keywords: [],
      contentTypes: [],
    },
    socialMedia: {
      platforms: [],
      postingSchedule: 'daily',
      timeZone: 'UTC',
    },
  });

  const handleStepComplete = (stepData: Partial<ProjectFormData>) => {
    setFormData({ ...formData, ...stepData });
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleCreateProject = () => {
    // TODO: Implement project creation
    console.log('Creating project with data:', formData);
    setOpen(false);
    router.push('/dashboard/projects');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <ProjectBasicsForm
            data={formData.basics}
            onComplete={(data) => handleStepComplete({ basics: data })}
          />
        );
      case 1:
        return (
          <BrandingSetupForm
            data={formData.branding}
            onComplete={(data) => handleStepComplete({ branding: data })}
          />
        );
      case 2:
        return (
          <ContentFeedsForm
            data={formData.contentFeeds}
            onComplete={(data) => handleStepComplete({ contentFeeds: data })}
          />
        );
      case 3:
        return (
          <SocialMediaForm
            data={formData.socialMedia}
            onComplete={(data) => handleStepComplete({ socialMedia: data })}
          />
        );
      case 4:
        return (
          <ProjectReview
            data={formData}
            onBack={() => setCurrentStep(currentStep - 1)}
            onComplete={handleCreateProject}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {STEPS[currentStep]}
            <span className="text-sm text-muted-foreground ml-2">
              Step {currentStep + 1} of {STEPS.length}
            </span>
          </DialogTitle>
        </DialogHeader>
        {renderStep()}
      </DialogContent>
    </Dialog>
  );
}