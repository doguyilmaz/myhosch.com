import { BrandConfig } from '@/types/brand.type';

export const brands: Record<string, BrandConfig> = {
  archosch: {
    name: 'archosch',
    title: 'Archosch',
    tagline: 'Archive of Digital Craftsmanship',
    description:
      'A repository of curated templates, resources, and experiments from various sources.',
    logo: {
      icon: 'Archive',
      text: 'archosch',
    },
    favicon: '/images/archosch.png',
    theme: {
      primary: '#047857',
      secondary: '#10b981',
      accent: '#d1fae5',
      darkPrimary: '#34d399',
      darkSecondary: '#10b981',
      darkAccent: '#064e3b',
    },
    contact: {
      email: 'hello@archosch.com',
      location: 'Worldwide',
      social: {
        github: 'https://github.com/myhosch',
      },
    },
    status: {
      message: 'Hosting archived resources for personal and shared use.',
      availableFor: ['Public Sharing', 'Archival Management'],
    },
    showFooter: true,
    legal: {
      lastUpdated: '2024-01-01',
      privacyPolicy: false,
      termsOfService: false,
      cookiePolicy: false,
    },
  },
  myhosch: {
    name: 'myhosch',
    title: 'Myhosch',
    tagline: 'Shaping Digital Dreams into Reality',
    description:
      'A personal space for crafting digital tools, templates, and innovative experiments.',
    logo: {
      icon: 'Rocket',
      text: 'myhosch',
    },
    favicon: '/myhosch-favicon.ico',
    theme: {
      primary: '#0d7494',
      secondary: '#14a2b8',
      accent: '#ccf1fb',
      darkPrimary: '#2dbfd4',
      darkSecondary: '#14a2b8',
      darkAccent: '#134a4e',
    },
    contact: {
      email: 'hello@myhosch.com',
      location: 'Istanbul, Turkey',
      social: {
        github: 'https://github.com/myhosch',
        twitter: 'https://twitter.com/myhosch',
        // linkedin: 'https://linkedin.com/in/myhosch',
      },
    },
    status: {
      message: 'Developing innovative projects and collaborating with like-minded creators.',
      availableFor: ['Consulting', 'Development', 'Solutions', 'Creativity', 'Collaborations'],
    },
    showFooter: true,
    legal: {
      lastUpdated: '2024-01-01',
      privacyPolicy: false, // '/privacy-policy',
      termsOfService: false, // '/terms-of-service',
      cookiePolicy: false, // '/cookie-policy',
    },
  },
};
