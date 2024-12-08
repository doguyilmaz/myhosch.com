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
