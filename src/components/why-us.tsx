
import { ShieldCheck, Compass, Heart, Star } from "lucide-react";

const whyUsFeatures = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Trusted & Verified",
      description: "We are a licensed and certified travel agency, ensuring your peace of mind.",
    },
    {
      icon: <Compass className="h-10 w-10 text-primary" />,
      title: "Expert Guidance",
      description: "Our experienced guides will be with you every step of your spiritual journey.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Tailored for You",
      description: "We offer customized packages to meet your specific needs and preferences.",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Premium Service",
      description: "Experience luxury and comfort with our top-rated accommodations and services.",
    },
  ];

export default function WhyUs() {
    return (
        <section className="py-12 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary-foreground">
              Why Choose Sadid Travels?
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              We are dedicated to providing a seamless and spiritually fulfilling
              journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsFeatures.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
