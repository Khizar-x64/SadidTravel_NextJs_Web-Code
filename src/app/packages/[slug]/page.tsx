import { notFound } from "next/navigation";
import Image from "next/image";
import { packages } from "@/lib/data";
import { CheckCircle, Clock, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

type PackageDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export function generateMetadata({ params }: PackageDetailPageProps) {
  const pkg = packages.find((p) => p.slug === params.slug);

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


export default function PackageDetailPage({ params }: PackageDetailPageProps) {
  const pkg = packages.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="bg-background">
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src={pkg.image.imageUrl}
          alt={pkg.image.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={pkg.image.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto h-full flex flex-col items-start justify-end text-white p-4 md:p-8">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            {pkg.title}
          </h1>
          <p className="mt-2 text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            {pkg.description}
          </p>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-3xl">
                  Trip Itinerary
                </CardTitle>
                <CardDescription>
                  A day-by-day plan for your journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible defaultValue="item-0">
                  {pkg.itinerary.map((item, index) => (
                    <AccordionItem key={item.day} value={`item-${index}`}>
                      <AccordionTrigger className="font-bold text-lg">
                        Day {item.day}: {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">
                  Package Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <span className="font-bold text-2xl">${pkg.price}</span>
                    <span className="text-muted-foreground"> / person</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-semibold">{pkg.duration}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Button asChild size="lg" className="w-full font-bold">
              <Link href="/contact">
                Book This Package <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
