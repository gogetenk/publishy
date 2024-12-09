'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProjectFormData } from './types';
import { ArrowLeft, Check } from 'lucide-react';

interface ProjectReviewProps {
  data: ProjectFormData;
  onBack: () => void;
  onComplete: () => void;
}

export function ProjectReview({ data, onBack, onComplete }: ProjectReviewProps) {
  return (
    <div className="space-y-6 py-4">
      <Card>
        <CardHeader>
          <CardTitle>Project Basics</CardTitle>
          <CardDescription>Review your project information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <span className="font-medium">Name:</span> {data.basics.name}
          </div>
          <div>
            <span className="font-medium">Description:</span>{' '}
            {data.basics.description}
          </div>
          <div>
            <span className="font-medium">Industry:</span> {data.basics.industry}
          </div>
          <div>
            <span className="font-medium">Target Audience:</span>{' '}
            {data.basics.targetAudience}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Branding</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">Colors:</span>
            <div
              className="w-6 h-6 rounded border"
              style={{ backgroundColor: data.branding.primaryColor }}
            />
            <div
              className="w-6 h-6 rounded border"
              style={{ backgroundColor: data.branding.secondaryColor }}
            />
          </div>
          <div>
            <span className="font-medium">Font:</span> {data.branding.font}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Content & Social Media</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="font-medium">Keywords</div>
            <div className="flex flex-wrap gap-2">
              {data.contentFeeds.keywords.map((keyword) => (
                <Badge key={keyword} variant="secondary">
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="font-medium">Connected Platforms</div>
            <div className="flex flex-wrap gap-2">
              {data.socialMedia.platforms.map((platform) => (
                <Badge key={platform} variant="secondary">
                  {platform}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="ghost" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={onComplete}>
          <Check className="mr-2 h-4 w-4" />
          Create Project
        </Button>
      </div>
    </div>
  );
}