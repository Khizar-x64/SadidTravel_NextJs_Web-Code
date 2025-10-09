import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Package } from "@/lib/types";

interface PackageCardProps {
  pkg: Package;
}

export function PackageCard({ pkg }: PackageCardProps) {
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
        <p className="text-primary-foreground/80 line-clamp-3">
          {pkg.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center bg-black/20 p-4">
        <div>
          <p className="text-sm text-primary-foreground/80">Starting from</p>
          <p className="text-2xl font-bold text-white">${pkg.price}</p>
        </div>
        <Button asChild variant="accent">
          <Link href={`/packages/${pkg.slug}`}>
            Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
