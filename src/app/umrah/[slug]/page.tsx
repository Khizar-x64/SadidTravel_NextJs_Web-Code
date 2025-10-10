
import { notFound } from "next/navigation";
import Image from "next/image";
import { umrahPackages } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { UmrahPackageDetails } from "@/components/umrah-package-details";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Clock, DollarSign, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type UmrahDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return umrahPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export function generateMetadata({ params }: UmrahDetailPageProps) {
  const pkg = umrahPackages.find((p) => p.slug === params.slug);

  if (!pkg) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: pkg.title,
    description: pkg.description,
  };
}

export default function UmrahDetailPage({ params }: UmrahDetailPageProps) {
  const pkg = umrahPackages.find((p) => p.slug === params.slug);

  if (!pkg || !pkg.details) {
    notFound();
  }

  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="relative h-80 md:h-96">
        <Image
            src={pkg.image.imageUrl}
            alt={pkg.image.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={pkg.image.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <div className="container mx-auto px-4">
                <Badge variant="secondary" className="mb-2 text-sm">{pkg.category}</Badge>
                <h1 className="text-3xl md:text-5xl font-headline font-bold text-white shadow-text">
                    {pkg.title}
                </h1>
                <p className="mt-2 max-w-3xl text-lg text-white/90 shadow-text">
                    {pkg.description}
                </p>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2">
            <UmrahPackageDetails details={pkg.details} />
          </div>

          {/* Right Column: Pricing & Booking */}
          <div className="space-y-8 lg:sticky top-24 self-start">
            <Card className="bg-primary text-primary-foreground shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-3xl flex items-center gap-3">
                  <Tag className="h-7 w-7 text-accent"/>
                  Package Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <div className="flex items-center gap-4">
                  <DollarSign className="h-6 w-6 text-accent" />
                  <div>
                    <span className="font-bold text-3xl">${pkg.price}</span>
                    <span className="text-primary-foreground/80"> / person</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-accent" />
                  <span className="font-semibold">{pkg.duration}</span>
                </div>
              </CardContent>
            </Card>
            
            <Button asChild size="lg" className="w-full font-bold text-lg" variant="accent">
              <Link href="/contact">
                Inquire Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
