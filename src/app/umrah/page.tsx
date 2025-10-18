
import { umrahPackages } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
} from "@/components/ui/card";
import Link from "next/link";
import { Plus, Clock, Hotel, Bus, FileText } from "lucide-react";

const pageHeaderImage = PlaceHolderImages.find(p => p.id === 'kaaba-hero');

const IconText = ({ icon, text }: { icon: React.ReactNode, text: string | undefined }) => {
    if (!text) return null;
    return (
        <div className="flex items-center text-sm text-muted-foreground gap-3">
            {icon}
            <span className="truncate">{text}</span>
        </div>
    );
};

const UmrahPackageCard = ({ pkg }: { pkg: any }) => {
  const inclusions = pkg.details?.packageInclusions;

  return (
    <Link href={`/umrah/${pkg.slug}`} className="group block h-full">
      <Card className="flex flex-col md:flex-row overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent border rounded-xl h-full">
          <div className="w-full md:w-2/5 h-64 md:h-auto relative">
              <Image
                src={pkg.image.imageUrl}
                alt={pkg.image.description}
                fill
                className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                data-ai-hint={pkg.image.imageHint}
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">{pkg.category}</div>
              <div className="absolute bottom-4 left-4 bg-accent text-accent-foreground font-bold py-1 px-3 text-lg rounded-sm">
                  ${pkg.price}
              </div>
          </div>

          <div className="w-full md:w-3/5 p-6 flex flex-col justify-between bg-card rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
            <div className="flex-grow flex">
              <div className="flex-grow">
                <h3 className="font-headline text-xl font-bold text-primary group-hover:text-accent transition-colors pr-4">{pkg.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{pkg.description}</p>
              </div>
              <div className="h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors ml-4" aria-label="View Details">
                  <Plus className="h-6 w-6" />
              </div>
            </div>
            <div className="space-y-2 mt-4">
                <IconText icon={<Clock className="h-5 w-5 text-primary flex-shrink-0"/>} text={pkg.duration} />
                <IconText icon={<Hotel className="h-5 w-5 text-primary flex-shrink-0"/>} text={inclusions?.makkahAccommodation.split(' with')[0]} />
                <IconText icon={<Bus className="h-5 w-5 text-primary flex-shrink-0"/>} text={inclusions?.transportation.split(' from')[0]} />
                <IconText icon={<FileText className="h-5 w-5 text-primary flex-shrink-0"/>} text={inclusions?.visa} />
            </div>
          </div>
      </Card>
    </Link>
  );
};


export default function UmrahPackagesPage() {
  const packageCategories = ['Group Umrah Package', 'Luxury Packages', 'Standard Umrah Package', 'Shuttle Umrah Package'];
  
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

      {packageCategories.map(category => {
        const packagesInCategory = umrahPackages.filter(pkg => pkg.category === category);
        if (packagesInCategory.length === 0) return null;
        
        return (
          <section key={category} className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8 text-center">{category}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {packagesInCategory.map((pkg) => (
                  <UmrahPackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </div>
          </section>
        )
      })}

    </div>
  );
}
