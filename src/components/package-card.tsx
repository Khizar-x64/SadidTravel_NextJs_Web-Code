import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Plus } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import type { Package } from "@/lib/types";

interface PackageCardProps {
  pkg: Package;
}

export function PackageCard({ pkg }: PackageCardProps) {
  // Take the first 2 items from includes, plus the duration.
  const highlights = [pkg.duration, ...pkg.includes.slice(0, 2)];

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-card">
        <div className="flex">
            {/* Image Section */}
            <div className="w-2/5 relative">
                <Image
                src={pkg.image.imageUrl}
                alt={pkg.image.description}
                fill
                className="object-cover"
                data-ai-hint={pkg.image.imageHint}
                />
                <div className="absolute top-0 left-0 bg-yellow-400 text-black font-bold py-1 px-3 text-lg">
                ${pkg.price}
                </div>
            </div>

            {/* Content Section */}
            <div className="w-3/5 p-4 flex flex-col justify-between relative">
                <div>
                    <h3 className="font-headline text-lg font-bold text-primary">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{pkg.description}</p>
                    <ul className="mt-3 space-y-2 text-sm">
                        {highlights.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                 <Link href={`/packages/${pkg.slug}`} className="absolute top-1/2 right-4 -translate-y-1/2 h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors" aria-label="View Details">
                    <Plus className="h-6 w-6" />
                </Link>
            </div>
        </div>
    </Card>
  );
}
