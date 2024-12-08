export interface BrandConfig {
  title: string;
  tagline: string;
  description: string;
  favicon?: string;
  showFooter?: boolean;
  status?: {
    text: string;
    type: 'success' | 'warning' | 'error';
  };
  availability?: string[];
  contact?: {
    email?: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export function getBrandConfig(): BrandConfig {
  return {
    title: 'Your Brand',
    tagline: 'Your Tagline',
    description: 'Your description goes here.',
    showFooter: true,
    status: {
      text: 'Available for projects',
      type: 'success',
    },
    availability: ['Full-time', 'Contract', 'Freelance'],
    contact: {
      email: 'your@email.com',
      twitter: 'yourhandle',
      github: 'yourgithub',
      linkedin: 'yourlinkedin',
    },
  };
}
