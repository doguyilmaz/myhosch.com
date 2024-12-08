import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Providers } from './providers';
import { getBrandConfig } from '@/lib/get-brand-config';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export function generateMetadata(): Metadata {
  const brand = getBrandConfig();

  return {
    title: brand.title,
    description: brand.description,
    icons: { icon: `/images/${brand.name}.png` },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
