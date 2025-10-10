
import { Compass, Settings2, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-12 w-12 text-accent" />,
    title: "Secure & Simple Booking",
    description: "Our streamlined booking process is transparent and secure, ensuring your peace of mind from the very first step. Plan your sacred journey with confidence.",
  },
  {
    icon: <Settings2 className="h-12 w-12 text-accent" />,
    title: "Build Your Perfect Journey",
    description: "From luxury hotels to specific flight preferences, we offer tailored packages to meet your exact needs. Let us craft an experience that is uniquely yours.",
  },
  {
    icon: <Compass className="h-12 w-12 text-accent" />,
    title: "Expert Guidance at Every Step",
    description: "Our dedicated team provides support from the moment you inquire until you return home, ensuring a seamless and spiritually fulfilling experience.",
  },
];

export default function WhySadidSection() {
    const sectionStyle = {
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23d1be68' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
    };

    return (
        <section className="py-16 md:py-24 bg-background" style={sectionStyle}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                        Your Journey, Simplified & Secured
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                        At Sadid Travels, we focus on the details so you can focus on your devotion.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-primary/5 p-8 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold font-headline text-primary">{feature.title}</h3>
                            <p className="mt-2 text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
