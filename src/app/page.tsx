import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Compass,
  Heart,
  MessageSquare,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PackageCard } from "@/components/package-card";
import { packages, testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactPopup } from "@/components/contact-popup";

const heroImage = PlaceHolderImages.find(p => p.id === 'kaaba-hero');

const whyUsFeatures = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Trusted & Verified",
    description: "We are a licensed and certified travel agency, ensuring your peace of mind.",
  },
  {
    icon: <Compass className="h-10 w-10 text-primary" />,
    title: "Expert Guidance",
    description: "Our experienced guides will be with you every step of your spiritual journey.",
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Tailored for You",
    description: "We offer customized packages to meet your specific needs and preferences.",
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    title: "Premium Service",
    description: "Experience luxury and comfort with our top-rated accommodations and services.",
  },
];

export default function Home() {
  const featuredPackages = packages.slice(0, 3);

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
            Discover our premium Hajj and Umrah packages, designed for a
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

      <section className="py-12 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">
              Why Choose Sadid Travels?
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to providing a seamless and spiritually fulfilling
              journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsFeatures.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              What Our Pilgrims Say
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Stories from those who have journeyed with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-bold">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.location}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    <MessageSquare className="inline-block h-4 w-4 mr-2" />
                    {testimonial.quote}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
