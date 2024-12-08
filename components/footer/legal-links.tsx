'use client';

import Link from 'next/link';
import { type BrandConfig } from '@/types/brand.type';

export function LegalLinks({ brand }: { brand: BrandConfig }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
      <Link href="/privacy" className="hover:text-primary transition-colors">
        Privacy Policy
      </Link>
      <Link href="/terms" className="hover:text-primary transition-colors">
        Terms of Service
      </Link>
      {brand.legal?.cookiePolicy && (
        <Link href="/cookies" className="hover:text-primary transition-colors">
          Cookie Policy
        </Link>
      )}
    </div>
  );
}
