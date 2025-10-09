
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";

const aboutHeaderImage = PlaceHolderImages.find(p => p.id === 'istanbul-mosque');
const missionImage = PlaceHolderImages.find(p => p.id === 'pilgrims-praying');


export default function AboutPage() {
  const commitmentSectionStyle = {
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23d1be68' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
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
