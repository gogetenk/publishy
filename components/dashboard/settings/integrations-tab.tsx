'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

interface SocialPlatform {
  id: string;
  name: string;
  icon: React.ElementType;
  connected: boolean;
  account?: string;
}

export function IntegrationsTab() {
  const [platforms, setPlatforms] = useState<SocialPlatform[]>([
    {
      id: 'twitter',
      name: 'Twitter',
      icon: Twitter,
      connected: true,
      account: '@publishy',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      connected: true,
      account: 'Publishy Official',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Instagram,
      connected: false,
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: Facebook,
      connected: false,
    },
  ]);

  const handleTogglePlatform = (platformId: string) => {
    setPlatforms(platforms.map(platform => 
      platform.id === platformId
        ? { ...platform, connected: !platform.connected }
        : platform
    ));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Connected Platforms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-muted">
                  <platform.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">{platform.name}</h3>
                  {platform.connected && platform.account && (
                    <p className="text-sm text-muted-foreground">
                      Connected as {platform.account}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {platform.connected ? (
                  <>
                    <Button variant="outline" size="sm">
                      Reconnect
                    </Button>
                    <Switch
                      checked={platform.connected}
                      onCheckedChange={() => handleTogglePlatform(platform.id)}
                    />
                  </>
                ) : (
                  <Button onClick={() => handleTogglePlatform(platform.id)}>
                    Connect
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Integration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <h3 className="font-medium">API Key</h3>
            <p className="text-sm text-muted-foreground">
              Use this key to access the Publishy API
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <code className="flex-1 p-2 rounded bg-muted font-mono text-sm">
              ••••••••••••••••••••••••••••••
            </code>
            <Button variant="outline">Show</Button>
            <Button variant="outline">Regenerate</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}