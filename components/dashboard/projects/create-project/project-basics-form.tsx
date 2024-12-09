'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { ProjectBasics } from './types';

const INDUSTRIES = [
  'Technology',
  'E-commerce',
  'Healthcare',
  'Education',
  'Finance',
  'Other',
];

const BRAND_TONES = [
  'Professional',
  'Casual',
  'Playful',
  'Educational',
  'Authoritative',
];

interface ProjectBasicsFormProps {
  data: ProjectBasics;
  onComplete: (data: ProjectBasics) => void;
}

export function ProjectBasicsForm({ data, onComplete }: ProjectBasicsFormProps) {
  const [formData, setFormData] = useState<ProjectBasics>(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">Project Name</Label>
        <Input
          id="name"
          placeholder="My Awesome Project"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          placeholder="Brief overview of your project"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select
          value={formData.industry}
          onValueChange={(value) => setFormData({ ...formData, industry: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {INDUSTRIES.map((industry) => (
              <SelectItem key={industry} value={industry.toLowerCase()}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetAudience">Target Audience</Label>
        <Input
          id="targetAudience"
          placeholder="e.g., Developers, Startups, Small Businesses"
          value={formData.targetAudience}
          onChange={(e) =>
            setFormData({ ...formData, targetAudience: e.target.value })
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="brandTone">Brand Tone</Label>
        <Select
          value={formData.brandTone}
          onValueChange={(value) => setFormData({ ...formData, brandTone: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select brand tone" />
          </SelectTrigger>
          <SelectContent>
            {BRAND_TONES.map((tone) => (
              <SelectItem key={tone} value={tone.toLowerCase()}>
                {tone}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
}