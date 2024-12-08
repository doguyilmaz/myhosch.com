'use client';

import { Icon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { type BrandConfig } from '@/config/brand';
import { ThemeSwitcher } from './theme-switcher';

export function BrandHeader({ brand }: { brand: BrandConfig }) {
  const LogoIcon = Icons[brand.logo.icon as keyof typeof Icons];

  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoIcon
              className="h-8 w-8"
              style={{ color: brand.theme.primary }}
            />
            <span
              className="text-2xl font-bold"
              style={{ color: brand.theme.primary }}
            >
              {brand.logo.text}
            </span>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}