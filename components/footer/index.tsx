'use client';

import { type BrandConfig } from '@/types/brand.type';
import { LegalLinks } from './legal-links';
import { SocialLinks } from './social-links';

export function Footer({ brand }: { brand: BrandConfig }) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <SocialLinks brand={brand} />
          <LegalLinks brand={brand} />
          <div className="text-sm text-muted-foreground">
            © {year} {brand.title}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
