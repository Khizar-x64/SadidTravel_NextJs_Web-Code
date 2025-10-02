import Image from "next/image";
import { destinations } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { DestinationCard } from "@/components/destination-card";

const pageHeaderImage = PlaceHolderImages.find(p => p.id === 'desert-caravan');

export default function DestinationsPage() {
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
              Explore Islamic Heritage
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Journey to lands rich with Islamic history, culture, and beauty beyond the holy cities.
            </p>
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
