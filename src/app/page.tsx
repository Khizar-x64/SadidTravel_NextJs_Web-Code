import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight
} from "lucide-react";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PackageCard } from "@/components/package-card";
import { packages } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import WhyUs from "@/components/why-us";
import { Skeleton } from "@/components/ui/skeleton";
import TestimonialsSection from "@/components/testimonials";
import ContactPopup from "@/components/contact-popup";
import PartnersSection from "@/components/partners";

const heroImage = PlaceHolderImages.find(p => p.id === 'kaaba-hero');
const featuredPackages = packages.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <ContactPopup />
      <section className="relative w-full h-[70vh] md:h-[80vh]">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center text-white px-4">
          <Badge
            variant="secondary"
            className="mb-4 bg-accent/80 text-accent-foreground border-accent"
          >
            Your Spiritual Journey Awaits
          </Badge>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight leading-tight text-shadow-lg">
            Experience the Holiest Journeys with Sadid Travels
          </h1>
          <h2 className="text-3xl md:text-5xl font-arabic font-bold mt-2">
            سديد للسفريات
          </h2>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/90">
            Discover our premium Hajj, Umrah, and global Islamic tour packages, designed for a
            profoundly moving and comfortable pilgrimage.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="font-bold">
              <Link href="/packages">
                View Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold bg-transparent text-white border-white hover:bg-white hover:text-black">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              Discover Our Packages
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated packages for an unforgettable
              spiritual experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
              <Link href="/packages">
                Explore All Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhyUs />

      <TestimonialsSection />
      
      <PartnersSection />
    </div>
  );
}
