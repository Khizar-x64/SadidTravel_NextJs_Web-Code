
import { packages } from "@/lib/data";
import { PackageCard } from "@/components/package-card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const pageHeaderImage = PlaceHolderImages.find(p => p.id === 'islamic-architecture');

export default function PackagesPage() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-20 md:py-32 animate-slide-up-and-fade">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">
                Our Spiritual Journeys
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Explore our diverse range of Umrah, Hajj, and Islamic tour
                packages designed for your comfort and spiritual fulfillment.
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

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
