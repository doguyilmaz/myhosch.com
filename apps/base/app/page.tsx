import { getBrandConfig } from '@/lib/get-brand-config';
import { BrandHeader } from '@/components/brand-header';
import { StatusBadge } from '@/components/status-badge';
import { ContactSection } from '@/components/contact-section';
import { AvailabilityTags } from '@/components/availability-tags';
import { Footer } from '@/components/footer';

export default function Home() {
  const brand = getBrandConfig();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BrandHeader brand={brand} />
      
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <StatusBadge brand={brand} />
          
          <h1 className="text-5xl font-bold mt-8 mb-4 text-foreground">
            {brand.title}
          </h1>
          
          <p className="text-2xl font-medium mb-4 text-muted-foreground">
            {brand.tagline}
          </p>
          
          <p className="text-lg text-muted-foreground mb-8">
            {brand.description}
          </p>

          <AvailabilityTags brand={brand} />
          <ContactSection brand={brand} />
        </div>
      </main>

      {brand.showFooter && <Footer brand={brand} />}
    </div>
  );
}