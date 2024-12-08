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
