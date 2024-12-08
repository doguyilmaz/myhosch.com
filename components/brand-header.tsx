'use client';

import { BrandConfig } from '@/types/brand.type';
import { ThemeSwitcher } from './theme-switcher';
import Link from 'next/link';
import Image from 'next/image';

export function BrandHeader({ brand }: { brand: BrandConfig }) {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 cursor-pointer">
            <Image src={`/images/${brand.name}.png`} alt={brand.logo.text} width={50} height={50} />
            <span className="text-3xl font-extralight" style={{ color: brand.theme.primary }}>
              {brand.logo.text}
            </span>
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
