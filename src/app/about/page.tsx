
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

const aboutHeaderImage = PlaceHolderImages.find(p => p.id === 'istanbul-mosque');
const missionImage = PlaceHolderImages.find(p => p.id === 'pilgrims-praying');


export default function AboutPage() {
  const commitmentSectionStyle = {
      backgroundColor: '#f3f4f6',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8ad5f' fill-opacity='0.15'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  };

  return (
    <div className="bg-background">
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mt-8 md:mt-12 h-64 md:h-[450px] relative animate-fade-in">
            {aboutHeaderImage && (
                <Image
                    src={aboutHeaderImage.imageUrl}
                    alt={aboutHeaderImage.description}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    data-ai-hint={aboutHeaderImage.imageHint}
                />
            )}
          </div>
          <div className="text-center animate-slide-up-and-fade mt-8">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-secondary-foreground">
              About Sadid Travels
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
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

      <section className="py-12 md:py-24" style={commitmentSectionStyle}>
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
