
import { umrahPackages } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Clock, Plus, Hotel, Bus, FileText } from "lucide-react";

const pageHeaderImage = PlaceHolderImages.find(p => p.id === 'kaaba-hero');

const IconText = ({ icon, text }: { icon: React.ReactNode, text: string | undefined }) => {
    if (!text) return null;
    return (
        <div className="flex items-center text-sm text-primary-foreground/80 gap-3">
            {icon}
            <span className="truncate">{text}</span>
        </div>
    );
};

const UmrahPackageCard = ({ pkg }: { pkg: any }) => {
  const inclusions = pkg.details?.packageInclusions;

  return (
    <Link href={`/umrah/${pkg.slug}`} className="group block h-full">
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent border-0 rounded-xl">
          <div className="flex flex-col md:flex-row h-full">
              {/* Image Section */}
              <div className="w-full md:w-2/5 h-64 md:h-[280px] relative">
                  <Image
                    src={pkg.image.imageUrl}
                    alt={pkg.image.description}
                    fill
                    className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-r-none"
                    data-ai-hint={pkg.image.imageHint}
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full">{pkg.category}</div>
                  <div className="absolute bottom-4 left-4 bg-yellow-400 text-black font-bold py-1 px-3 text-lg rounded-sm">
                      ${pkg.price}
                  </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-3/5 p-6 flex flex-col justify-between bg-primary rounded-b-xl md:rounded-r-xl md:rounded-l-none relative">
                <div className="flex flex-col flex-grow justify-between">
                    <div>
                        <h3 className="font-headline text-xl font-bold text-primary-foreground group-hover:text-accent transition-colors pr-12">{pkg.title}</h3>
                        <p className="text-sm text-primary-foreground/80 mt-2 line-clamp-2">{pkg.description}</p>
                    </div>
                    <div className="space-y-2 mt-4">
                        <IconText icon={<Clock className="h-5 w-5 text-accent flex-shrink-0"/>} text={pkg.duration} />
                        <IconText icon={<Hotel className="h-5 w-5 text-accent flex-shrink-0"/>} text={inclusions?.makkahAccommodation.split(' with')[0]} />
                        <IconText icon={<Bus className="h-5 w-5 text-accent flex-shrink-0"/>} text={inclusions?.transportation.split(' from')[0]} />
                        <IconText icon={<FileText className="h-5 w-5 text-accent flex-shrink-0"/>} text={inclusions?.visa} />
                    </div>
                </div>
                <div className="absolute top-4 right-4 h-10 w-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center group-hover:bg-accent/90 transition-colors" aria-label="View Details">
                    <Plus className="h-6 w-6" />
                </div>
              </div>
          </div>
      </Card>
    </Link>
  );
};


export default function UmrahPackagesPage() {
  const packageCategories = ['Group Umrah Package', 'Luxury Packages', 'Standard Umrah Package', 'Shuttle Umrah Package'];
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

      {packageCategories.map(category => {
        const packagesInCategory = umrahPackages.filter(pkg => pkg.category === category);
        if (packagesInCategory.length === 0) return null;
        
        return (
          <section key={category} className="py-12 md:py-16 bg-background" style={commitmentSectionStyle}>
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
