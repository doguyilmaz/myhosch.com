import { getBrandConfig } from '@/lib/get-brand-config';
import { BrandHeader } from '@/components/brand-header';
import { Footer } from '@/components/footer';

export default function PrivacyPolicy() {
  const brand = getBrandConfig();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BrandHeader brand={brand} />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p>Last updated: {brand.legal?.lastUpdated || new Date().toLocaleDateString()}</p>
          
          <div dangerouslySetInnerHTML={{ __html: brand.legal?.privacyPolicy || defaultPrivacyPolicy }} />
        </div>
      </main>

      {brand.showFooter && <Footer brand={brand} />}
    </div>
  );
}

const defaultPrivacyPolicy = `
<h2>1. Introduction</h2>
<p>This Privacy Policy explains how we collect, use, and protect your personal information...</p>

<h2>2. Information We Collect</h2>
<p>We collect information that you provide directly to us...</p>

<!-- Add more sections as needed -->
`;