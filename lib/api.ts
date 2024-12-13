import { DashboardResponse } from "@/types/api";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:7244';

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || `API error: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`API error for ${endpoint}:`, error);
    throw error;
  }
}

export const dashboardApi = {
  getDashboard: () => fetchApi<DashboardResponse>('/dashboards'),
};