import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const headerImage = PlaceHolderImages.find(p => p.id === 'islamic-architecture');
const lastUpdatedDate = "June 1, 2024";

export default function TermsPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-20 md:py-32">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">
                Terms of Service
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Please read these terms carefully before using our service.
              </p>
            </div>
            <div className="h-64 md:h-[450px] relative">
              {headerImage && (
                  <Image
                      src={headerImage.imageUrl}
                      alt={headerImage.description}
                      fill
                      className="object-cover rounded-lg shadow-lg opacity-50"
                      data-ai-hint={headerImage.imageHint}
                  />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none dark:prose-invert text-foreground">
                <p>Last updated: {lastUpdatedDate}</p>
                
                <h2>1. Agreement to Terms</h2>
                <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>

                <h2>2. Bookings and Payments</h2>
                <p>All bookings are subject to availability. A deposit is required to secure your booking, with the full balance due before a specified date prior to departure. We accept various forms of payment, which will be outlined during the booking process.</p>

                <h2>3. Travel Documents</h2>
                <p>It is your responsibility to ensure that you have a valid passport, visa, and any other required travel documents. We can assist with visa processing, but we are not responsible for any visa rejections.</p>

                <h2>4. Itinerary Changes</h2>
                <p>While we strive to adhere to the advertised itinerary, we reserve the right to make changes due to unforeseen circumstances such as flight delays, weather conditions, or local regulations. We will endeavor to provide suitable alternatives.</p>
                
                <h2>5. Your Responsibilities</h2>
                <p>You are responsible for your own behavior and for complying with the laws and customs of the countries you visit. We reserve the right to refuse service to anyone who behaves in a disruptive or dangerous manner.</p>

                <h2>6. Limitation of Liability</h2>
                <p>Sadid Travels acts as an agent for hotels, airlines, and other contractors and shall not be held liable for any injury, damage, loss, delay, or irregularity that may be occasioned by reason of any defect in any vehicle, or through the acts or default of any company or person engaged in conveying the passenger or in carrying out the arrangements of the tour.</p>

                <h2>7. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of our country of operation, without regard to its conflict of law provisions.</p>
            </div>
        </div>
      </section>
    </div>
  );
}
