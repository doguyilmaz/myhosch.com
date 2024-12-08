import { brands, type BrandConfig } from '@/config/brand';

export function getBrandConfig(): BrandConfig {
  // In a real environment, you might want to use environment variables
  // or other configuration methods to determine the current brand
  const currentBrand = process.env.NEXT_PUBLIC_BRAND || 'myhosch';
  return brands[currentBrand];
}
