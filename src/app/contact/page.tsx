
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, Phone, MapPin } from "lucide-react";

const contactHeaderImage = PlaceHolderImages.find(p => p.id === 'contact-banner');

export default function ContactPage() {
  return (
    <div>
      <section className="relative py-20 md:py-32 bg-secondary">
         {contactHeaderImage && (
            <Image
                src={contactHeaderImage.imageUrl}
                alt={contactHeaderImage.description}
                fill
                className="object-cover"
                data-ai-hint={contactHeaderImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              We're here to help you plan your perfect spiritual journey. Reach
              out to us with your questions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2 bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl md:text-3xl font-headline font-bold mb-6 text-primary">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-headline font-bold mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-4 mt-1 text-primary" />
                    <span>
                      307 W 38th St, New York, NY 10018, USA
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-4 text-primary" />
                    <a href="tel:+17543992498" className="hover:text-primary">
                      +1 754-399-2498
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-4 text-primary" />
                    <a
                      href="mailto:sadidtravelsllc@gmail.com"
                      className="hover:text-primary"
                    >
                      sadidtravelsllc@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-card h-80 rounded-lg shadow-lg overflow-hidden">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.428489833502!2d-73.9926285845942!3d40.75263727932757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ac557b5f1b%3A0x4f3479986b2b5125!2s307%20W%2038th%20St%2C%20New%20York%2C%20NY%2010018%2C%20USA!5e0!3m2!1sen!2s!4v1678886400000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sadid Travels Location"
                 ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
