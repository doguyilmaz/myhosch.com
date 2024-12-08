import { getBrandConfig } from '@/lib/get-brand-config';
import { BrandHeader } from '@/components/brand-header';
import { Footer } from '@/components/footer';

export default function TermsOfService() {
  const brand = getBrandConfig();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BrandHeader brand={brand} />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1>Terms of Service</h1>
          <p>Last updated: {brand.legal?.lastUpdated || new Date().toLocaleDateString()}</p>
          
          <div dangerouslySetInnerHTML={{ __html: brand.legal?.termsOfService || defaultTerms }} />
        </div>
      </main>

      {brand.showFooter && <Footer brand={brand} />}
    </div>
  );
}

const defaultTerms = `
<h2>1. Terms</h2>
<p>By accessing this website, you agree to be bound by these terms of service...</p>

<h2>2. Use License</h2>
<p>Permission is granted to temporarily download one copy of the materials...</p>

<!-- Add more sections as needed -->
`;