import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { getBrandConfig } from '@/src/lib/get-brand-config';

const inter = Inter({ subsets: ['latin'] });

export function generateMetadata(): Metadata {
  const brand = getBrandConfig();

  return {
    title: brand.title,
    description: brand.description,
    icons: {
      icon: brand.favicon || '/favicon.ico',
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
