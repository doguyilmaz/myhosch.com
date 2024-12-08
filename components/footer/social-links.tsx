'use client';

import { Github, Twitter, Linkedin } from 'lucide-react';
import { type BrandConfig } from '@/types/brand.type';

export function SocialLinks({ brand }: { brand: BrandConfig }) {
  return (
    <div className="flex gap-4">
      {brand.contact.social.github && (
        <a
          href={brand.contact.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="h-5 w-5" />
        </a>
      )}
      {brand.contact.social.twitter && (
        <a
          href={brand.contact.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Twitter className="h-5 w-5" />
        </a>
      )}
      {brand.contact.social.linkedin && (
        <a
          href={brand.contact.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      )}
    </div>
  );
}
