import { getBrandConfig } from '@/lib/get-brand-config';
import { BrandHeader } from '@/components/brand-header';
import { StatusBadge } from '@/components/status-badge';
import { ContactSection } from '@/components/contact-section';
import { AvailabilityTags } from '@/components/availability-tags';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export default function Home() {
  const brand = getBrandConfig();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BrandHeader brand={brand} />

      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            className="mx-auto mb-8"
            src={`/images/${brand.name}.png`}
            alt={brand.logo.text}
            width={120}
            height={120}
          />

          <StatusBadge brand={brand} />

          <h1 className="text-5xl font-normal mt-8 mb-4 text-foreground">{brand.title}</h1>

          <p className="text-2xl font-light mb-4 text-muted-foreground">{brand.tagline}</p>

          <p className="text-lg font-extralight text-muted-foreground mb-8">{brand.description}</p>

          <AvailabilityTags brand={brand} />
          <ContactSection brand={brand} />
        </div>
      </main>

      {brand.showFooter && <Footer brand={brand} />}
    </div>
  );
}
