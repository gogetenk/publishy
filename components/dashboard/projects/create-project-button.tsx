'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { CreateProjectDialog } from './create-project/create-project-dialog';

export function CreateProjectButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Plus className="h-4 w-4 mr-2" />
        New Project
      </Button>
      <CreateProjectDialog isOpen={open} onOpenChange={setOpen} />
    </>
  );
}