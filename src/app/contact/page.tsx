
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
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23d1be68' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
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
