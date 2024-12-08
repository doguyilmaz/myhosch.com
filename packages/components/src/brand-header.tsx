'use client';

import * as React from 'react';
import type { BrandConfig } from '@repo/lib/types';

interface BrandHeaderProps {
  brand: BrandConfig;
}

export function BrandHeader({ brand }: BrandHeaderProps) {
  return (
    <header className='w-full border-b'>
      <div className='container mx-auto px-4 py-4'>
        <h1 className='text-xl font-semibold'>{brand.title}</h1>
      </div>
    </header>
  );
}
