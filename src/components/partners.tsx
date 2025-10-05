"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { partners } from "@/lib/data";

export default function PartnersSection() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
        Autoplay({ delay: 2000, stopOnInteraction: false }),
    ]);

    return (
        <section className="py-12 md:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">
                        Our Trusted Partners
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                        We collaborate with world-class brands to ensure you have a premium travel experience.
                    </p>
                </div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {partners.map((partner) => (
                            <div key={partner.id} className="flex-shrink-0 flex-grow-0 basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6 p-4">
                                <Link href={partner.website} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center h-20 p-2 bg-white/70 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 grayscale hover:grayscale-0 opacity-80 hover:opacity-100">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={partner.logoUrl}
                                            alt={`${partner.name} Logo`}
                                            fill
                                            sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 15vw"
                                            className="object-contain"
                                        />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
