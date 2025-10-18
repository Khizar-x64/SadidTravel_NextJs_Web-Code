
import Image from "next/image";
import Link from "next/link";
import { Plus, Clock, Hotel, Bus, FileText } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { Package } from "@/lib/types";

interface PackageCardProps {
  pkg: Package;
}

const IconText = ({ icon, text }: { icon: React.ReactNode, text: string | undefined }) => {
    if (!text) return null;
    return (
        <div className="flex items-center text-sm text-muted-foreground gap-3">
            {icon}
            <span className="truncate">{text}</span>
        </div>
    );
};


export function PackageCard({ pkg }: PackageCardProps) {
  const getInclusion = (keywords: string[]) => pkg.includes.find(item => keywords.some(kw => item.toLowerCase().includes(kw)));
  
  const accommodation = getInclusion(['hotel', 'accommodation']);
  const transport = getInclusion(['transport', 'transfer']);
  const visa = getInclusion(['visa']);

  return (
    <Link href={`/packages/${pkg.slug}`} className="group block h-full">
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent border rounded-xl">
          <div className="flex flex-col md:flex-row h-full">
              {/* Image Section */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                  <Image
                    src={pkg.image.imageUrl}
                    alt={pkg.image.description}
                    fill
                    className="object-cover rounded-t-xl md:rounded-l-xl md:rounded-r-none"
                    data-ai-hint={pkg.image.imageHint}
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black font-bold py-1 px-3 text-lg rounded-sm">
                    ${pkg.price}
                  </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-3/5 p-6 flex flex-col justify-between bg-card rounded-b-xl md:rounded-r-xl md:rounded-l-none relative">
                  <div className="flex-grow">
                    <h3 className="font-headline text-xl font-bold text-primary group-hover:text-accent transition-colors pr-12">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{pkg.description}</p>
                  </div>
                  <div className="space-y-2 mt-4">
                      <IconText icon={<Clock className="h-5 w-5 text-accent flex-shrink-0"/>} text={pkg.duration} />
                      {accommodation && <IconText icon={<Hotel className="h-5 w-5 text-accent flex-shrink-0"/>} text={accommodation} />}
                      {transport && <IconText icon={<Bus className="h-5 w-5 text-accent flex-shrink-0"/>} text={transport} />}
                      {visa && <IconText icon={<FileText className="h-5 w-5 text-accent flex-shrink-0"/>} text={visa} />}
                  </div>
                   <div className="absolute top-4 right-4 h-10 w-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center group-hover:bg-accent/90 transition-colors" aria-label="View Details">
                      <Plus className="h-6 w-6" />
                  </div>
              </div>
          </div>
      </Card>
    </Link>
  );
}
