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
import { useState } from 'react';
import { BrandingSetup } from './types';

const FONTS = ['Inter', 'Roboto', 'Open Sans', 'Montserrat', 'Poppins'];
const VOICE_STYLES = [
  'Friendly',
  'Professional',
  'Technical',
  'Casual',
  'Authoritative',
];

interface BrandingSetupFormProps {
  data: BrandingSetup;
  onComplete: (data: BrandingSetup) => void;
}

export function BrandingSetupForm({ data, onComplete }: BrandingSetupFormProps) {
  const [formData, setFormData] = useState<BrandingSetup>(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="logo">Logo URL</Label>
        <Input
          id="logo"
          type="url"
          placeholder="https://example.com/logo.png"
          value={formData.logo}
          onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="primaryColor">Primary Color</Label>
          <div className="flex gap-2">
            <Input
              id="primaryColor"
              type="color"
              value={formData.primaryColor}
              onChange={(e) =>
                setFormData({ ...formData, primaryColor: e.target.value })
              }
              className="w-12 p-1 h-10"
            />
            <Input
              type="text"
              value={formData.primaryColor}
              onChange={(e) =>
                setFormData({ ...formData, primaryColor: e.target.value })
              }
              className="flex-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="secondaryColor">Secondary Color</Label>
          <div className="flex gap-2">
            <Input
              id="secondaryColor"
              type="color"
              value={formData.secondaryColor}
              onChange={(e) =>
                setFormData({ ...formData, secondaryColor: e.target.value })
              }
              className="w-12 p-1 h-10"
            />
            <Input
              type="text"
              value={formData.secondaryColor}
              onChange={(e) =>
                setFormData({ ...formData, secondaryColor: e.target.value })
              }
              className="flex-1"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="font">Primary Font</Label>
        <Select
          value={formData.font}
          onValueChange={(value) => setFormData({ ...formData, font: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select font" />
          </SelectTrigger>
          <SelectContent>
            {FONTS.map((font) => (
              <SelectItem key={font} value={font}>
                {font}
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