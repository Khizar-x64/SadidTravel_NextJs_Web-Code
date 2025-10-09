
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
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-primary text-primary-foreground">
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
        <CardDescription className="flex items-center pt-2 text-primary-foreground/80">
          <Clock className="h-4 w-4 mr-2" />
          {pkg.duration}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-primary-foreground/80">
          A high-quality Umrah experience with excellent amenities. Contact us for detailed inclusions.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-black/20 p-4">
        <div>
          <p className="text-sm text-primary-foreground/80">Starting from</p>
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
  const commitmentSectionStyle = {
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23d1be68' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
  };
  
  return (
    <div>
      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-20 md:py-32 animate-slide-up-and-fade">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">
                Umrah Packages
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Choose from a wide range of Umrah packages tailored to your needs and budget.
              </p>
            </div>
            <div className="h-64 md:h-[450px] relative animate-fade-in">
              {pageHeaderImage && (
                  <Image
                      src={pageHeaderImage.imageUrl}
                      alt={pageHeaderImage.description}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                      data-ai-hint={pageHeaderImage.imageHint}
                  />
              )}
            </div>
          </div>
        </div>
      </section>

      {packageCategories.map(category => (
        <section key={category} className="py-12 md:py-16 bg-background" style={commitmentSectionStyle}>
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
