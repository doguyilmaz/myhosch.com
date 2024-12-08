'use client';

import { Icon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { BrandConfig } from '@/types/brand.type';
import { ThemeSwitcher } from './theme-switcher';
import Link from 'next/link';

export function BrandHeader({ brand }: { brand: BrandConfig }) {
  const LogoIcon = Icons[brand.logo.icon as keyof typeof Icons] as React.ElementType;

  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <LogoIcon className="h-8 w-8" style={{ color: brand.theme.primary }} />
            <span className="text-2xl font-bold" style={{ color: brand.theme.primary }}>
              {brand.logo.text}
            </span>
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
