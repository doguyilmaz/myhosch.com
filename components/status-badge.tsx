'use client';

import { Badge } from '@/components/ui/badge';
import { type BrandConfig } from '@/config/brand';
import { useBrandColors } from '@/lib/use-brand-colors';
import { useEffect, useState } from 'react';

export function StatusBadge({ brand }: { brand: BrandConfig }) {
  const colors = useBrandColors(brand);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render the badge with styles until mounted
  if (!mounted) {
    return <Badge variant="secondary" className="text-sm py-1 px-4">{brand.status.message}</Badge>;
  }

  return (
    <Badge
      variant="secondary"
      className="text-sm py-1 px-4"
      style={{ backgroundColor: colors.accent, color: colors.primary }}
    >
      {brand.status.message}
    </Badge>
  );
}