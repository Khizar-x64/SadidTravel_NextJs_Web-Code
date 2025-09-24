import { SiteConfig, Package, Testimonial, FAQ, Blog } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import packagesData from './packages.json';

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

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ahmed & Fatima Khan",
    location: "Toronto, Canada",
    quote: "Sadid Travels made our Umrah journey seamless and spiritually enriching. The hotels were excellent, and our guide was incredibly knowledgeable. Highly recommended!",
    avatarUrl: findImage('avatar1').imageUrl,
  },
  {
    id: "2",
    name: "Aisha Yusuf",
    location: "London, UK",
    quote: "My Hajj experience was beyond words. Every detail was meticulously planned by Sadid Travels. I could focus entirely on my Ibadah. JazakAllah Khair!",
    avatarUrl: findImage('avatar2').imageUrl,
  },
  {
    id: "3",
    name: "Ibrahim Mohammed",
    location: "New York, USA",
    quote: "The Jerusalem tour was a life-changing experience. Praying at Al-Aqsa was a dream come true. Thank you, Sadid Travels, for the amazing arrangements.",
    avatarUrl: findImage('avatar3').imageUrl,
  },
];

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

export const blogs: Blog[] = [
    {
      id: "1",
      slug: "preparing-for-your-first-umrah",
      title: "Preparing for Your First Umrah: A Spiritual and Practical Guide",
      author: "Admin",
      date: "2024-05-15",
      excerpt: "Embarking on your first Umrah is a momentous occasion. This guide covers the essential spiritual and practical preparations to ensure a smooth and meaningful journey.",
      content: "...",
      image: findImage('pilgrims-praying'),
    },
    {
      id: "2",
      slug: "top-5-ziyarat-sites-in-madinah",
      title: "Top 5 Ziyarat Sites in Madinah You Shouldn't Miss",
      author: "Admin",
      date: "2024-05-10",
      excerpt: "Madinah is rich with Islamic history. Discover the five most significant Ziyarat locations that will connect you deeply with the life of the Prophet (PBUH) and his companions.",
      content: "...",
      image: findImage('madinah-mosque'),
    }
]
