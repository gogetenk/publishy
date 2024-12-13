'use client';

import { DashboardMetrics } from '@/components/dashboard/overview/dashboard-metrics';
import { ProjectGrid } from '@/components/dashboard/overview/project-grid';
import { ErrorState } from '@/components/ui/error-state';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useDashboard } from '@/hooks/use-dashboard';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { data: dashboard, isLoading, error, refetch } = useDashboard();
  const { user, isLoading: isUserLoading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/api/auth/login'); // Redirige vers la page de login si non connecté
    }
  }, [isLoading, user, router]);

  if (!user) return null; // Empêche le rendu jusqu'à la redirection

  if (error) {
    return (
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <ErrorState
          title="Unable to load dashboard"
          description="We couldn't load your dashboard data. This might be due to a network issue or a temporary server problem."
          actionLabel="Refresh dashboard"
          onAction={() => refetch()}
        />
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <DashboardMetrics data={dashboard} isLoading={isLoading} />
          <ProjectGrid projects={dashboard?.projects} isLoading={isLoading} />
        </TabsContent>
      </Tabs>
    </div>
  );
}