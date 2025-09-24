import type { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    facebook: string;
  };
  mainNav: MainNavItem[];
};

export type Package = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: {
    id: string;
    imageUrl: string;
    description: string;
    imageHint: string;
  };
  includes: string[];
  itinerary: { day: number | string; title: string; description: string }[];
};

export type Blog = {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: {
    id: string;
    imageUrl: string;
    description: string;
    imageHint: string;
  };
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  avatarUrl: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};
