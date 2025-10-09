
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, Phone, MapPin, Building, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const contactHeaderImage = PlaceHolderImages.find(p => p.id === 'contact-banner');

export default function ContactPage() {
  const commitmentSectionStyle = {
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8ad5f' fill-opacity='0.39'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
  };
  return (
    <div className="bg-background">
      <section className="relative h-96">
        {contactHeaderImage && (
            <Image
                src={contactHeaderImage.imageUrl}
                alt={contactHeaderImage.description}
                fill
                className="object-cover"
                data-ai-hint={contactHeaderImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                Contact Us
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                Let's plan your next spiritual journey. We are here to assist you every step of the way.
            </p>
        </div>
      </section>

      <section className="py-12 md:py-24" style={commitmentSectionStyle}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-headline font-bold text-primary mb-6">
                Send a Direct Message
              </h2>
              <Card className="p-8 border shadow-lg bg-white text-foreground">
                <ContactForm />
              </Card>
            </div>
            
            <div className="lg:col-span-2">
               <h2 className="text-3xl font-headline font-bold text-primary mb-6">
                Other Ways to Connect
              </h2>
              <div className="space-y-6">
                <Card className="overflow-hidden shadow-lg bg-white text-foreground">
                  <CardHeader className="bg-secondary p-6 flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-headline text-secondary-foreground">Call Us</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-2">
                    <p className="text-muted-foreground">Speak directly to our travel experts.</p>
                    <a href="tel:+17543992498" className="text-lg font-semibold text-primary hover:underline">
                      +1 754-399-2498
                    </a>
                  </CardContent>
                </Card>

                 <Card className="overflow-hidden shadow-lg bg-white text-foreground">
                  <CardHeader className="bg-secondary p-6 flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-headline text-secondary-foreground">Email Us</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-2">
                    <p className="text-muted-foreground">For detailed inquiries and bookings.</p>
                    <a href="mailto:sadidtravelsllc@gmail.com" className="text-lg font-semibold text-primary hover:underline break-all">
                      sadidtravelsllc@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden shadow-lg bg-white text-foreground">
                  <CardHeader className="bg-secondary p-6 flex flex-row items-center gap-4">
                     <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-headline text-secondary-foreground">Visit Our Office</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-2">
                     <p className="text-muted-foreground">720 Marble Way, <br/>Boca Raton, FL 33432, USA</p>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="h-96">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.882483163102!2d-80.11005812456488!3d26.36224377778933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91e77a23c8e63%3A0x234d6ac335349f85!2s720%20Marble%20Way%2C%20Boca%20Raton%2C%20FL%2033432%2C%20USA!5e0!3m2!1sen!2s!4v1717616634863!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sadid Travels Location"
            ></iframe>
        </div>
      </section>
    </div>
  );
}
