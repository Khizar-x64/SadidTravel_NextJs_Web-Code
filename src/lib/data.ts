import { SiteConfig, Package, Testimonial, FAQ, Blog } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";

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

export const packages: Package[] = [
  {
    id: "umrah-deluxe-10",
    slug: "umrah-deluxe-10-days",
    title: "10-Day Deluxe Umrah Package",
    description: "Experience a spiritually uplifting Umrah journey with stays in 5-star hotels in Makkah and Madinah.",
    price: 1999,
    duration: "10 Days, 9 Nights",
    image: findImage('madinah-mosque'),
    includes: ["5-Star Hotels", "Private Transport", "Guided Ziyarat", "Visa Processing"],
    itinerary: [
      { day: 1, title: "Arrival in Jeddah & Transfer to Makkah", description: "Arrive at King Abdulaziz International Airport, meet our representative, and transfer to your hotel in Makkah to perform Umrah." },
      { day: 2, title: "Jumu'ah & Ibadah in Makkah", description: "Perform Jumu'ah prayer at Masjid al-Haram and spend the day in personal worship." },
      { day: 3, title: "Ziyarat in Makkah", description: "Guided tour to historical Islamic sites around Makkah like Jabal al-Nour, Jabal Thawr, and Arafat." },
      { day: 4, title: "Free Day in Makkah", description: "A day for personal Ibadah and exploration around the Grand Mosque." },
      { day: 5, title: "Travel to Madinah", description: "Check out from your Makkah hotel and travel to Madinah by high-speed train. Check into your hotel near Masjid an-Nabawi." },
      { day: 6, title: "Ibadah in Madinah", description: "Spend the day in prayer and contemplation at the Prophet's Mosque and visit Riyadhul Jannah." },
      { day: 7, title: "Ziyarat in Madinah", description: "Guided tour to significant sites in Madinah, including Masjid Quba, Masjid al-Qiblatayn, and the site of the Battle of Uhud." },
      { day: 8, title: "Free Day in Madinah", description: "Another day for personal worship and reflection in the city of the Prophet (PBUH)." },
      { day: 9, title: "Preparation for Departure", description: "Enjoy a final day in Madinah, shopping for souvenirs and preparing for your journey home." },
      { day: 10, title: "Departure from Madinah", description: "Transfer to Prince Mohammad bin Abdulaziz Airport for your departure." },
    ]
  },
  {
    id: "hajj-premium-14",
    slug: "hajj-premium-14-days",
    title: "14-Day Premium Hajj Package",
    description: "Fulfill the pillar of Islam with our premium Hajj package, offering comfort and guidance throughout the rituals.",
    price: 7999,
    duration: "14 Days",
    image: findImage('kaaba-hero'),
    includes: ["5-Star Hotels near Haram", "Mina Tents (Category A)", "Full Board Meals", "Dedicated Hajj Guide"],
    itinerary: [
        { day: 1-4, title: "Arrival in Makkah & Pre-Hajj Rituals", description: "Arrive in Makkah, perform initial Umrah, and prepare for the rites of Hajj with guidance from our scholars." },
        { day: 5-9, title: "The Days of Hajj", description: "Move to Mina, spend the day in Arafat, travel to Muzdalifah, and perform the rituals of stoning, sacrifice, and Tawaf al-Ifadah." },
        { day: 10-12, title: "Post-Hajj in Makkah", description: "Spend the days of Tashreeq in Mina and Makkah, completing all Hajj rituals." },
        { day: 13-14, title: "Travel to Madinah & Departure", description: "Travel to Madinah to visit the Prophet's Mosque before departing from Madinah airport." },
    ]
  },
  {
    id: "islamic-jerusalem-tour-7",
    slug: "islamic-jerusalem-tour-7-days",
    title: "7-Day Islamic Jerusalem Tour",
    description: "Journey to the third holiest site in Islam. Pray at Masjid Al-Aqsa and explore the rich Islamic history of Jerusalem.",
    price: 1499,
    duration: "7 Days, 6 Nights",
    image: findImage('al-aqsa-dome'),
    includes: ["4-Star Hotel", "Daily Breakfast", "Guided Tours of Al-Aqsa & Old City", "Airport Transfers"],
    itinerary: [
        { day: 1, title: "Arrival in Jerusalem", description: "Arrive at the airport and transfer to your hotel in Jerusalem." },
        { day: 2, title: "Al-Aqsa Compound", description: "Full-day tour of the Al-Aqsa compound, including prayers at the mosque and visiting the Dome of the Rock." },
        { day: 3, title: "Old City Exploration", description: "Walk through the historic quarters of the Old City, visiting Islamic landmarks and markets." },
        { day: 4, title: "Bethlehem & Hebron", description: "Day trip to visit the birthplace of Prophet Isa (AS) in Bethlehem and the Ibrahimi Mosque in Hebron." },
        { day: 5, title: "Free Day", description: "A day for personal exploration, shopping, or additional prayers." },
        { day: 6, title: "Historical Sites", description: "Visit other historical sites around Jerusalem." },
        { day: 7, title: "Departure", description: "Transfer to the airport for your flight home." },
    ]
  },
  {
    id: "istanbul-bursa-tour-8",
    slug: "istanbul-bursa-tour-8-days",
    title: "8-Day Istanbul & Bursa Tour",
    description: "Explore the legacy of the Ottoman Empire, from the magnificent mosques of Istanbul to the historic capital of Bursa.",
    price: 1299,
    duration: "8 Days, 7 Nights",
    image: findImage('istanbul-mosque'),
    includes: ["Boutique Hotels", "Bosphorus Cruise", "Guided City Tours", "All Transfers"],
    itinerary: [
        { day: 1-4, title: "Discovering Istanbul", description: "Visit the Blue Mosque, Hagia Sophia, Topkapi Palace, and enjoy a cruise on the Bosphorus." },
        { day: 5-6, title: "Journey to Bursa", description: "Travel to Bursa, visit the Grand Mosque (Ulu Cami), Green Mosque, and the historic Silk Market." },
        { day: 7, title: "Return to Istanbul", description: "Return to Istanbul for a final day of shopping and exploration." },
        { day: 8, title: "Departure", description: "Transfer to Istanbul airport for your departure." },
    ]
  },
];

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
