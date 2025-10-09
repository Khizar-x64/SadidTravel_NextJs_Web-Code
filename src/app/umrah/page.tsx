import { umrahPackages } from "@/lib/data";
import { PackageCard } from "@/components/package-card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const pageHeaderImage = PlaceHolderImages.find(p => p.id === 'kaaba-hero');

const UmrahPackageCard = ({ pkg }: { pkg: any }) => {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 w-full">
        <Image
          src={pkg.image.imageUrl}
          alt={pkg.image.description}
          fill
          className="object-cover"
          data-ai-hint={pkg.image.imageHint}
        />
        <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">{pkg.category}</div>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl leading-tight">
          {pkg.title}
        </CardTitle>
        <CardDescription className="flex items-center pt-2 text-card-foreground/80">
          <Clock className="h-4 w-4 mr-2" />
          {pkg.duration}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-card-foreground/80">
          A high-quality Umrah experience with excellent amenities. Contact us for detailed inclusions.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-black/20 p-4">
        <div>
          <p className="text-sm text-card-foreground/80">Starting from</p>
          <p className="text-2xl font-bold text-white">${pkg.price}</p>
        </div>
        <Button asChild variant="accent">
          <Link href="/contact">
            Inquire Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};


export default function UmrahPackagesPage() {
  const packageCategories = ['Luxury / VIP', 'Deluxe', 'Premium / Shuttle', 'Economy'];
  
  return (
    <div>
      <section className="relative py-20 md:py-32 bg-secondary">
        {pageHeaderImage && (
            <Image
                src={pageHeaderImage.imageUrl}
                alt={pageHeaderImage.description}
                fill
                className="object-cover"
                data-ai-hint={pageHeaderImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">
              Umrah Packages
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Choose from a wide range of Umrah packages tailored to your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {packageCategories.map(category => (
        <section key={category} className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8 text-center">{category} Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {umrahPackages.filter(pkg => pkg.category === category).map((pkg) => (
                <UmrahPackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      ))}

    </div>
  );
}
