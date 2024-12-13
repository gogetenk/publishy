import { NextResponse } from 'next/server';
import { dashboardApi } from '@/lib/api';

export async function GET() {
  try {
    const data = await dashboardApi.getDashboard();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}