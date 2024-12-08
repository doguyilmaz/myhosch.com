import { brands, type BrandConfig } from './brand';

export function getBrandConfig(): BrandConfig {
  // In a real environment, you might want to use environment variables
  // or other configuration methods to determine the current brand
  const currentBrand = process.env.NEXT_PUBLIC_BRAND || 'myhosch';
  if (!brands[currentBrand]) {
    throw new Error(`Invalid brand: ${currentBrand}`);
  }
  return brands[currentBrand];
}
