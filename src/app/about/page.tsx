import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

const aboutHeaderImage = PlaceHolderImages.find(p => p.id === 'istanbul-mosque');
const missionImage = PlaceHolderImages.find(p => p.id === 'pilgrims-praying');


export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="relative py-20 md:py-32 bg-secondary">
        {aboutHeaderImage && (
            <Image
                src={aboutHeaderImage.imageUrl}
                alt={aboutHeaderImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutHeaderImage.imageHint}
            />
        )}
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
            <h1 className="text-4xl md:text-5xl font-headline font-bold">
              About Sadid Travels
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Crafting unforgettable spiritual journeys with devotion and excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                    <h2 className="font-headline text-3xl text-primary">Our Story</h2>
                    <p>
                        Sadid Travels was founded with a simple yet profound mission: to provide pilgrims with a seamless, comfortable, and spiritually enriching experience on their journey to the holy lands. Our name, 'Sadid', which means 'correct' or 'on the right path' in Arabic, reflects our commitment to integrity, excellence, and unwavering support for our guests.
                    </p>
                    <p>
                        From humble beginnings, we have grown into a trusted name in Islamic travel, guided by our core values and the invaluable trust of the community we serve.
                    </p>
                </div>
                 <div>
                    {missionImage && <Image src={missionImage.imageUrl} alt={missionImage.description} width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint={missionImage.imageHint} />}
                 </div>
            </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">
                Our Commitment to You
                </h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                We promise to be with you at every step of your sacred journey.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                    <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4"/>
                    <h3 className="font-headline text-xl font-bold">Spiritual Focus</h3>
                    <p className="mt-2 text-muted-foreground">We handle all logistics so you can focus entirely on your worship and reflection.</p>
                </div>
                <div className="text-center p-6">
                    <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4"/>
                    <h3 className="font-headline text-xl font-bold">Unmatched Quality</h3>
                    <p className="mt-2 text-muted-foreground">From 5-star hotels to dedicated guides, we ensure a premium experience.</p>
                </div>
                <div className="text-center p-6">
                    <CheckCircle className="h-10 w-10 text-primary mx-auto mb-4"/>
                    <h3 className="font-headline text-xl font-bold">Transparent Pricing</h3>
                    <p className="mt-2 text-muted-foreground">No hidden fees. We believe in honest and clear pricing for all our packages.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
