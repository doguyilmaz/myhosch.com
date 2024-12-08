'use client';

import * as React from 'react';
import type { BrandConfig } from '@repo/lib/types';
import { cn } from '@repo/lib/utils';

interface StatusBadgeProps {
  brand: BrandConfig;
}

export function StatusBadge({ brand }: StatusBadgeProps) {
  if (!brand.status) return null;

  return (
    <span
      className={cn('inline-flex items-center px-3 py-1 rounded-full text-sm font-medium', {
        'bg-green-100 text-green-800': brand.status.type === 'success',
        'bg-yellow-100 text-yellow-800': brand.status.type === 'warning',
        'bg-red-100 text-red-800': brand.status.type === 'error',
      })}
    >
      {brand.status.text}
    </span>
  );
}
