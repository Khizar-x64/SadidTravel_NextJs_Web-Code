import Image from 'next/image';
import Link from 'next/link';
import type { Destination } from '@/lib/types';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface DestinationHighlightCardProps {
  destination: Destination;
}

export function DestinationHighlightCard({
  destination,
}: DestinationHighlightCardProps) {
  return (
    <Link href={`/destinations/${destination.slug}`} className="group block">
      <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300">
        <Image
          src={destination.image.imageUrl}
          alt={destination.image.description}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={destination.image.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-headline font-bold">{destination.name}</h3>
          <p className="mt-1 text-sm text-primary-foreground/80 line-clamp-2">
            {destination.short_description}
          </p>
           <div className="mt-4 font-semibold text-accent flex items-center">
             Explore <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
           </div>
        </div>
      </div>
    </Link>
  );
}