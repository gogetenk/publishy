import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Publishy - Automated Content Publishing for Developers',
  description: 'Automate your social media presence while you focus on building.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <UserProvider>
        <body className={inter.className}>
          <Providers>{children}</Providers>
          <Analytics/>
          <SpeedInsights />
        </body>
      </UserProvider>
    </html>
  );
}