'use client';

import * as React from 'react';
import type { BrandConfig } from '@repo/lib/types';

interface ContactSectionProps {
  brand: BrandConfig;
}

export function ContactSection({ brand }: ContactSectionProps) {
  if (!brand.contact) return null;

  return (
    <div className='flex gap-4 justify-center mt-8'>
      {brand.contact.email && (
        <a
          href={`mailto:${brand.contact.email}`}
          className='text-muted-foreground hover:text-foreground'
        >
          Email
        </a>
      )}
      {brand.contact.twitter && (
        <a
          href={`https://twitter.com/${brand.contact.twitter}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-muted-foreground hover:text-foreground'
        >
          Twitter
        </a>
      )}
      {brand.contact.github && (
        <a
          href={`https://github.com/${brand.contact.github}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-muted-foreground hover:text-foreground'
        >
          GitHub
        </a>
      )}
      {brand.contact.linkedin && (
        <a
          href={`https://linkedin.com/in/${brand.contact.linkedin}`}
          target='_blank'
          rel='noopener noreferrer'
          className='text-muted-foreground hover:text-foreground'
        >
          LinkedIn
        </a>
      )}
    </div>
  );
}
