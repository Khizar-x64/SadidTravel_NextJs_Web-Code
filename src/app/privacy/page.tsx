
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const headerImage = PlaceHolderImages.find(p => p.id === 'islamic-architecture');
const lastUpdatedDate = "June 1, 2024";

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-20 md:py-32">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Your privacy is important to us.
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
                
                <h2>1. Introduction</h2>
                <p>Welcome to Sadid Travels. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.</p>

                <h2>2. Information We Collect</h2>
                <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.</p>
                <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: name, email address, phone number, and any other information you choose to provide.</p>

                <h2>3. How We Use Your Information</h2>
                <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>

                <h2>4. Will Your Information Be Shared With Anyone?</h2>
                <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
                
                <h2>5. How Long Do We Keep Your Information?</h2>
                <p>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</p>

                <h2>6. How Do We Keep Your Information Safe?</h2>
                <p>We aim to protect your personal information through a system of organizational and technical security measures.</p>

                <h2>7. Do We Collect Information From Minors?</h2>
                <p>We do not knowingly solicit data from or market to children under 18 years of age.</p>

                <h2>8. What Are Your Privacy Rights?</h2>
                <p>You have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.</p>

                <h2>9. Contact Us</h2>
                <p>If you have questions or comments about this policy, you may email us at sadidtravelsllc@gmail.com.</p>
            </div>
        </div>
      </section>
    </div>
  );
}
