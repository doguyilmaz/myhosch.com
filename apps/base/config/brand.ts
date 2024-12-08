export type BrandConfig = {
  name: 'archosch' | 'myhosch';
  title: string;
  tagline: string;
  description: string;
  logo: {
    icon: string;
    text: string;
  };
  favicon?: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    darkPrimary?: string;
    darkSecondary?: string;
    darkAccent?: string;
  };
  contact: {
    email?: string;
    location?: string;
    social: {
      github?: string;
      twitter?: string;
      linkedin?: string;
    };
  };
  status: {
    message: string;
    availableFor?: string[];
  };
  showFooter?: boolean;
  legal?: {
    lastUpdated?: string;
    privacyPolicy?: string;
    termsOfService?: string;
    cookiePolicy?: boolean;
  };
};

export const brands: Record<string, BrandConfig> = {
  archosch: {
    name: 'archosch',
    title: 'Archosch',
    tagline: 'Archive of Digital Craftsmanship',
    description: 'A curated collection of archived projects and experiments',
    logo: {
      icon: 'Archive',
      text: 'archosch',
    },
    favicon: '/archosch-favicon.ico',
    theme: {
      primary: '#1e40af',
      secondary: '#3b82f6',
      accent: '#dbeafe',
      darkPrimary: '#60a5fa',
      darkSecondary: '#3b82f6',
      darkAccent: '#1e3a8a',
    },
    contact: {
      email: 'archive@archosch.dev',
      location: 'Istanbul, Turkey',
      social: {
        github: 'https://github.com/yourusername',
      },
    },
    status: {
      message: 'This domain hosts archived projects',
      availableFor: ['Project Archival', 'Legacy Documentation'],
    },
    showFooter: false,
    legal: {
      lastUpdated: '2024-01-01',
      cookiePolicy: false,
    },
  },
  myhosch: {
    name: 'myhosch',
    title: 'Myhosch',
    tagline: 'Crafting Digital Experiences',
    description: 'Personal workspace for innovative projects and experiments',
    logo: {
      icon: 'Rocket',
      text: 'myhosch',
    },
    favicon: '/myhosch-favicon.ico',
    theme: {
      primary: '#047857',
      secondary: '#10b981',
      accent: '#d1fae5',
      darkPrimary: '#34d399',
      darkSecondary: '#10b981',
      darkAccent: '#064e3b',
    },
    contact: {
      email: 'hello@myhosch.dev',
      location: 'Istanbul, Turkey',
      social: {
        github: 'https://github.com/yourusername',
        twitter: 'https://twitter.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
      },
    },
    status: {
      message: 'Currently working on personal projects',
      availableFor: ['Collaborations', 'Open Source', 'Side Projects'],
    },
    showFooter: false,
    legal: {
      lastUpdated: '2024-01-01',
      cookiePolicy: true,
    },
  },
};
