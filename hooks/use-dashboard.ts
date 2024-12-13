'use client';

import { dashboardApi } from '@/lib/api';
import { DashboardResponse } from '@/types/api';
import { useQuery } from '@tanstack/react-query';

export function useDashboard() {
  return useQuery<DashboardResponse>({
    queryKey: ['dashboard'],
    queryFn: async () => {
      try {
        const response = await dashboardApi.getDashboard();
        console.log('Dashboard fetch response:', response);

        return response;
      } catch (error) {
        console.error('Dashboard fetch error:', error);
        throw error;
      }
    },
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 10000),
  });
}