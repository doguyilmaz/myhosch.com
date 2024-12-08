'use client';

import * as React from 'react';
import type { BrandConfig } from '@repo/lib/types';

interface FooterProps {
  brand: BrandConfig;
}

export function Footer({ brand }: FooterProps) {
  return (
    <footer className='w-full border-t'>
      <div className='container mx-auto px-4 py-8'>
        <div className='text-center text-sm text-muted-foreground'>
          © {new Date().getFullYear()} {brand.title}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
