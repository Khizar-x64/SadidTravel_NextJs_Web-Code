
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Compass, ShieldCheck, Heart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { PackageCard } from '@/components/package-card';
import { packages, destinations } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import TestimonialsSection from '@/components/testimonials';
import ContactPopup from '@/components/contact-popup';
import PartnersSection from '@/components/partners';
import { DestinationHighlightCard } from '@/components/destination-highlight-card';
import WhySadidSection from '@/components/why-sadid-section';

const heroImage = PlaceHolderImages.find((p) => p.id === 'kaaba-hero');
const featuredPackages = packages.slice(0, 3);
const featuredDestinations = destinations.filter((d) =>
  ['makkah', 'madinah', 'turkey', 'jordan'].includes(d.id)
);

const whyUsFeatures = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Trusted & Verified',
    description:
      'Licensed and certified, ensuring your peace of mind on this sacred journey.',
  },
  {
    icon: <Compass className="h-8 w-8 text-accent" />,
    title: 'Expert Guidance',
    description:
      'Our experienced guides provide spiritual and practical support at every step.',
  },
  {
    icon: <Heart className="h-8 w-8 text-accent" />,
    title: 'Personalized Service',
    description:
      'We offer tailored packages to meet your specific spiritual and practical needs.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <ContactPopup />

      {/* --- Hero Section --- */}
      <section className="relative bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-12 md:py-24 text-left animate-slide-up-and-fade">
              <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-secondary-foreground">
                Your Sacred Journey Awaits
              </h1>
              <p className="mt-4 max-w-2xl text-lg md:text-xl text-muted-foreground">
                Experience a seamless and spiritually fulfilling Umrah with Sadid Travels. We provide expertly guided, tailored packages from the USA, designed for your ultimate comfort and peace of mind.
              </p>
              <div className="mt-8 flex flex-wrap justify-start gap-4">
                <Button asChild size="lg" variant="accent" className="font-bold">
                  <Link href="/packages">
                    Explore Packages <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href="/contact">Plan Your Trip</Link>
                </Button>
              </div>
            </div>
            <div className="h-64 md:h-[450px] relative animate-fade-in">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
            {whyUsFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center md:flex-row gap-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold font-headline text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* --- Featured Destinations Section --- */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">
              Explore Our Destinations
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              From the holy cities to lands rich with Islamic history.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((dest) => (
              <DestinationHighlightCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>


      {/* --- Featured Packages Section --- */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              Curated Spiritual Journeys
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully selected packages for an unforgettable
              experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg font-bold">
              <Link href="/packages">
                View All Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <TestimonialsSection />
      
      <WhySadidSection />
      
      {/* --- Partners --- */}
      <PartnersSection />
    </div>
  );
}
