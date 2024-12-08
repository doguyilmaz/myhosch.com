'use client';

import { useTheme } from 'next-themes';
import { type BrandConfig } from '@/config/brand';

export function useBrandColors(brand: BrandConfig) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return {
    primary: isDark && brand.theme.darkPrimary ? brand.theme.darkPrimary : brand.theme.primary,
    secondary: isDark && brand.theme.darkSecondary ? brand.theme.darkSecondary : brand.theme.secondary,
    accent: isDark && brand.theme.darkAccent ? brand.theme.darkAccent : brand.theme.accent,
  };
}