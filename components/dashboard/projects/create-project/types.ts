export interface ProjectBasics {
  name: string;
  description: string;
  industry: string;
  targetAudience: string;
  brandTone: string;
}

export interface BrandingSetup {
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  font: string;
  voiceStyle: string[];
  ctaTemplates: string[];
}

export interface ContentFeeds {
  rssFeeds: string[];
  keywords: string[];
  contentTypes: string[];
}

export interface SocialMedia {
  platforms: string[];
  postingSchedule: string;
  timeZone: string;
}

export interface ProjectFormData {
  basics: ProjectBasics;
  branding: BrandingSetup;
  contentFeeds: ContentFeeds;
  socialMedia: SocialMedia;
}