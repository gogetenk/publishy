'use client';

import { cn } from '@/lib/utils';
import {
  BarChart,
  Calendar,
  Layout,
  LifeBuoy,
  LogOut,
  Rss,
  Settings,
  Share2,
  FolderKanban,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

const routes = [
  {
    label: 'Dashboard',
    icon: Layout,
    href: '/dashboard',
  },
  {
    label: 'Projects',
    icon: FolderKanban,
    href: '/projects',
  },
  {
    label: 'Analytics',
    icon: BarChart,
    href: '/analytics',
  },
  {
    label: 'Content Calendar',
    icon: Calendar,
    href: '/calendar',
  },
  {
    label: 'Social Accounts',
    icon: Share2,
    href: '/social-accounts',
  },
  {
    label: 'RSS Feeds',
    icon: Rss,
    href: '/rss-feeds',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-muted/50">
      {/* Logo and Navigation */}
      <div className="flex-1 px-3 py-4">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-xl font-bold">Publishy</h1>
        </Link>
        <nav className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition',
                pathname === route.href ? 'text-primary bg-primary/10' : 'text-muted-foreground'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="border-t px-3 py-4">
        <div className="space-y-2">
          <Link
            href="/support"
            className={cn(
              'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition',
              'text-muted-foreground'
            )}
          >
            <div className="flex items-center flex-1">
              <LifeBuoy className="h-5 w-5 mr-3" />
              Support
            </div>
          </Link>
          <button
            className={cn(
              'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-destructive hover:bg-destructive/10 rounded-lg transition',
              'text-muted-foreground'
            )}
          >
            <div className="flex items-center flex-1">
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </div>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}