import { SiteConfig, Package, Testimonial, FAQ, Blog } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import packagesData from './packages.json';
import blogsData from './blogs.json';
import testimonialsData from './testimonials.json';


const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // Return a default/fallback image object if not found
    const defaultImage = PlaceHolderImages.find((img) => img.id === 'islamic-architecture');
    return defaultImage || { id: 'default', imageUrl: 'https://picsum.photos/seed/7/600/400', description: 'Default fallback image', imageHint: 'architecture pattern' };
  }
  return image;
};

export const siteConfig: SiteConfig = {
  name: "Sadid Travels",
  description: "Premium Islamic travel agency for Umrah, Hajj, and spiritual tours.",
  url: "https://sadid-travels.com",
  ogImage: "https://sadid-travels.com/og.jpg",
  links: {
    twitter: "https://twitter.com/sadidtravels",
    facebook: "https://facebook.com/sadidtravels",
  },
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Packages", href: "/packages" },
    { title: "Blogs", href: "/blogs" },
    { title: "Contact", href: "/contact" },
  ],
};

export const packages: Package[] = packagesData.map(pkg => ({
    ...pkg,
    image: findImage(pkg.imageId),
}));

export const testimonials: Testimonial[] = testimonialsData.map(t => ({
  ...t,
  avatarUrl: findImage(t.avatarImageId).imageUrl,
}));


export const faqs: FAQ[] = [
    {
      id: "faq1",
      question: "What documents are required for an Umrah visa?",
      answer: "You will need a passport valid for at least 6 months, passport-sized photos with a white background, a completed visa application form, and proof of vaccination against meningitis. We will guide you through the entire process.",
    },
    {
      id: "faq2",
      question: "Are your Hajj packages Sharia-compliant?",
      answer: "Yes, all our packages are designed under the guidance of reputable Islamic scholars to ensure all rituals are performed according to the Quran and Sunnah.",
    },
    {
      id: "faq3",
      question: "Can I customize a tour package?",
      answer: "Absolutely. We specialize in creating tailor-made itineraries to suit your specific needs, interests, and budget. Please contact us to discuss your requirements.",
    },
    {
      id: "faq4",
      question: "What is included in the package price?",
      answer: "Typically, our packages include visa processing, flights, accommodation, transportation, and guided tours (Ziyarat). Specific inclusions are listed on each package details page.",
    },
];

export const blogs: Blog[] = blogsData.map(blog => ({
    ...blog,
    content: "...", // placeholder content
    image: findImage(blog.imageId)
}));
