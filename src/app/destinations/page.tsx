
import Image from "next/image";
import { destinations } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { DestinationCard } from "@/components/destination-card";

const pageHeaderImage = PlaceHolderImages.find(p => p.id === 'desert-caravan');

export default function DestinationsPage() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-20 md:py-32 animate-slide-up-and-fade">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">
                Explore Islamic Heritage
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Journey to lands rich with Islamic history, culture, and beauty beyond the holy cities.
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
            {destinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
