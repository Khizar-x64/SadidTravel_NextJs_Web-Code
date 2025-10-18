
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Plus, Clock, Hotel, Bus, FileText } from "lucide-react";

import {
  Card,
} from "@/components/ui/card";
import type { Package } from "@/lib/types";

interface PackageCardProps {
  pkg: Package;
}

const IconText = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center text-sm text-muted-foreground">
        {icon}
        <span>{text}</span>
    </div>
);


export function PackageCard({ pkg }: PackageCardProps) {
  const getInclusion = (keywords: string[]) => pkg.includes.find(item => keywords.some(kw => item.toLowerCase().includes(kw)));
  
  const accommodation = getInclusion(['hotel', 'accommodation']);
  const transport = getInclusion(['transport', 'transfer']);
  const visa = getInclusion(['visa']);

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-card h-full">
        <div className="flex flex-col md:flex-row h-full">
            {/* Image Section */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <Image
                src={pkg.image.imageUrl}
                alt={pkg.image.description}
                fill
                className="object-cover"
                data-ai-hint={pkg.image.imageHint}
                />
                <div className="absolute top-2 left-2 bg-yellow-400 text-black font-bold py-1 px-3 text-lg rounded-sm">
                ${pkg.price}
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-3/5 p-4 flex flex-col justify-between relative">
                <div className="pr-12">
                    <h3 className="font-headline text-lg font-bold text-primary">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{pkg.description}</p>
                    <div className="mt-4 space-y-2">
                        <IconText icon={<Clock className="h-4 w-4 mr-2 text-primary flex-shrink-0"/>} text={pkg.duration} />
                        {accommodation && <IconText icon={<Hotel className="h-4 w-4 mr-2 text-primary flex-shrink-0"/>} text={accommodation} />}
                        {transport && <IconText icon={<Bus className="h-4 w-4 mr-2 text-primary flex-shrink-0"/>} text={transport} />}
                        {visa && <IconText icon={<FileText className="h-4 w-4 mr-2 text-primary flex-shrink-0"/>} text={visa} />}
                    </div>
                </div>
                 <Link href={`/packages/${pkg.slug}`} className="absolute top-4 right-4 h-10 w-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors" aria-label="View Details">
                    <Plus className="h-6 w-6" />
                </Link>
            </div>
        </div>
    </Card>
  );
}
