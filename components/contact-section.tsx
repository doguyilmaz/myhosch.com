'use client';

import { Mail, MapPin, Github } from 'lucide-react';
import { type BrandConfig } from '@/config/brand';

export function ContactSection({ brand }: { brand: BrandConfig }) {
  return (
    <div className='flex flex-col items-center gap-4 mt-8'>
      {brand.contact.email && (
        <a
          href={`mailto:${brand.contact.email}`}
          className='flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors'
        >
          <Mail className='h-4 w-4' />
          <span>{brand.contact.email}</span>
        </a>
      )}

      {brand.contact.location && (
        <div className='flex items-center gap-2 text-muted-foreground'>
          <MapPin className='h-4 w-4' />
          <span>{brand.contact.location}</span>
        </div>
      )}

      {brand.contact.social.github && (
        <a
          href={brand.contact.social.github}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors'
        >
          <Github className='h-4 w-4' />
          <span>GitHub</span>
        </a>
      )}
    </div>
  );
}
