
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
    instagram: string;
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
  category?: string;
  imageId?: string;
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
  avatarImageId: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type Destination = {
    id: string;
    slug: string;
    name: string;
    short_description: string;
    long_description: string;
    image: {
        id: string;
        imageUrl: string;
        description: string;
        imageHint: string;
    };
    related_blogs: string[];
    related_packages: string[];
};

export type Partner = {
  id: string;
  name: string;
  logoUrl: string;
  website: string;
};
