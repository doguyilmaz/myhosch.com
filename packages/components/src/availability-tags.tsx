'use client';

import * as React from 'react';
import type { BrandConfig } from '@repo/lib/types';

interface AvailabilityTagsProps {
  brand: BrandConfig;
}

export function AvailabilityTags({ brand }: AvailabilityTagsProps) {
  if (!brand.availability?.length) return null;

  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      {brand.availability.map((tag) => (
        <span key={tag} className='px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm'>
          {tag}
        </span>
      ))}
    </div>
  );
}
