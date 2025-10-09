import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Destination } from "@/lib/types";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative h-56 w-full">
        <Image
          src={destination.image.imageUrl}
          alt={destination.image.description}
          fill
          className="object-cover"
          data-ai-hint={destination.image.imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl leading-tight group-hover:text-accent transition-colors">
          {destination.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-card-foreground/80 line-clamp-3">
          {destination.short_description}
        </p>
      </CardContent>
      <CardFooter className="bg-black/20 p-4">
        <Button asChild variant="accent" className="w-full">
          <Link href={`/destinations/${destination.slug}`}>
            View More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
