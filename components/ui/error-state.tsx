'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  fullPage?: boolean;
}

export function ErrorState({
  title = "Something went wrong",
  description = "There was an error loading the data. Please try again.",
  actionLabel = "Try again",
  onAction,
  fullPage = false,
}: ErrorStateProps) {
  const Content = () => (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="rounded-full bg-destructive/10 p-3">
        <AlertCircle className="h-6 w-6 text-destructive" />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-md">
          {description}
        </p>
      </div>
      {onAction && (
        <Button
          onClick={onAction}
          variant="outline"
          className="gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          {actionLabel}
        </Button>
      )}
    </div>
  );

  if (fullPage) {
    return (
      <div className="flex min-h-[400px] items-center justify-center p-8">
        <Content />
      </div>
    );
  }

  return (
    <Card className="p-8">
      <Content />
    </Card>
  );
}