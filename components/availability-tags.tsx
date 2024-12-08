'use client';

import { BrandConfig } from '@/types/brand.type';
import { useBrandColors } from '@/lib/use-brand-colors';
import { useEffect, useState } from 'react';

export function AvailabilityTags({ brand }: { brand: BrandConfig }) {
  const colors = useBrandColors(brand);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!brand.status.availableFor?.length) return null;

  // Don't render with styles until mounted
  if (!mounted) {
    return (
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {brand.status.availableFor.map(item => (
          <span key={item} className="text-sm px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      {brand.status.availableFor.map(item => (
        <span
          key={item}
          className="text-sm px-3 py-1 rounded-full"
          style={{
            backgroundColor: colors.accent,
            color: colors.primary,
          }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
