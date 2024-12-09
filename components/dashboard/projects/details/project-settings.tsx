'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Project } from '@/types/project';
import { useState } from 'react';

interface ProjectSettingsProps {
  project: Project;
}

export function ProjectSettings({ project }: ProjectSettingsProps) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [targetAudience, setTargetAudience] = useState('Developers and technical teams');
  const [brandTone, setBrandTone] = useState('Professional and technical');
  const [brandKeywords, setBrandKeywords] = useState('developer tools, productivity, automation');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement settings update
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Project Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Branding & Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Textarea
                id="targetAudience"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder="Describe your target audience..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brandTone">Brand Tone</Label>
              <Textarea
                id="brandTone"
                value={brandTone}
                onChange={(e) => setBrandTone(e.target.value)}
                placeholder="Describe your brand's tone of voice..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brandKeywords">Brand Keywords</Label>
              <Input
                id="brandKeywords"
                value={brandKeywords}
                onChange={(e) => setBrandKeywords(e.target.value)}
                placeholder="Comma-separated keywords"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit">Save Changes</Button>
        </div>
      </div>
    </form>
  );
}