
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const headerImage = PlaceHolderImages.find(p => p.id === 'islamic-architecture');
const lastUpdatedDate = "June 1, 2024";

export default function RefundPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-20 md:py-32 animate-slide-up-and-fade">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">
                Refund Policy
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Our policy on cancellations and refunds.
              </p>
            </div>
            <div className="h-64 md:h-[450px] relative animate-fade-in">
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
                
                <h2>1. General Policy</h2>
                <p>Our refund policy is designed to be fair to our customers while accounting for the costs we incur in planning and booking your travel. The possibility of a refund and the amount depends on how far in advance you cancel your booking.</p>

                <h2>2. Cancellation by You</h2>
                <ul>
                    <li><strong>More than 90 days before departure:</strong> 75% refund of the total package price, excluding non-refundable costs like visa fees and flight deposits.</li>
                    <li><strong>Between 45 and 90 days before departure:</strong> 50% refund of the total package price.</li>
                    <li><strong>Less than 45 days before departure:</strong> No refund is possible due to commitments with our partners.</li>
                </ul>
                <p>All cancellations must be submitted in writing to our support team.</p>

                <h2>3. Hajj and Ramadan Packages</h2>
                <p>Hajj and Ramadan packages have a stricter cancellation policy due to the high demand and stringent booking requirements from Saudi authorities. Please refer to the specific terms provided at the time of booking these packages.</p>

                <h2>4. Cancellation by Us</h2>
                <p>In the unlikely event that we have to cancel your package for any reason other than force majeure, you will be entitled to a full refund of all monies paid. We will not be liable for any other costs incurred by you.</p>

                <h2>5. Visa Rejection</h2>
                <p>If your visa application is rejected by the embassy for reasons beyond our control, the cancellation policy will apply based on the date of cancellation. We are not responsible for visa rejections.</p>

                <h2>6. Contact Us</h2>
                <p>For any questions regarding our refund policy, please contact us at info@sadidtravels.com.</p>
            </div>
        </div>
      </section>
    </div>
  );
}
