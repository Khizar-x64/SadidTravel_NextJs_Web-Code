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
      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-12 md:py-24">
              <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
                {pkg.title}
              </h1>
              <p className="mt-2 text-lg md:text-xl text-muted-foreground max-w-3xl">
                {pkg.description}
              </p>
            </div>
            <div className="h-64 md:h-[450px] relative">
              <Image
                src={pkg.image.imageUrl}
                alt={pkg.image.description}
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
                data-ai-hint={pkg.image.imageHint}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">
                  Trip Itinerary
                </CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  A day-by-day plan for your journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible defaultValue="item-0">
                  {pkg.itinerary.map((item, index) => (
                    <AccordionItem key={item.day} value={`item-${index}`}>
                      <AccordionTrigger className="font-bold text-lg text-primary-foreground">
                        Day {item.day}: {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-primary-foreground/80">
                        {item.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="sticky top-24 bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">
                  Package Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-3 text-accent" />
                  <div>
                    <span className="font-bold text-2xl">${pkg.price}</span>
                    <span className="text-primary-foreground/80"> / person</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-accent" />
                  <span className="font-semibold">{pkg.duration}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-accent" />
                      <span className="text-primary-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Button asChild size="lg" className="w-full font-bold" variant="accent">
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
