
"use client";

import { ShieldCheck, Settings2, Compass } from 'lucide-react';


export default function WhySadidSection() {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                            Your Journey, Simplified & Secured
                            <span className="block h-1.5 w-24 bg-accent mt-2"></span>
                        </h2>
                    </div>
                    <div className="prose-lg text-muted-foreground">
                        <p>
                           From your first inquiry to your return home, we ensure a seamless and secure booking experience. We handle the complexities so you can focus on the spiritual significance of your journey.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-background rounded-lg shadow-md">
                        <div className="flex justify-center mb-4">
                            <ShieldCheck size={56} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-headline text-primary mb-2">Secure & Simple Booking</h3>
                        <p className="text-muted-foreground">
                           Our streamlined process includes effortless visa handling and secure payments, giving you complete peace of mind.
                        </p>
                    </div>

                    <div className="p-6 bg-background rounded-lg shadow-md">
                         <div className="flex justify-center mb-4">
                            <Settings2 size={56} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-headline text-primary mb-2">Build Your Perfect Journey</h3>
                        <p className="text-muted-foreground">
                           Your spiritual journey is personal. We offer tailored packages that match your budget, schedule, and specific needs.
                        </p>
                    </div>

                    <div className="p-6 bg-background rounded-lg shadow-md">
                        <div className="flex justify-center mb-4">
                           <Compass size={56} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-headline text-primary mb-2">Expert Guidance at Every Step</h3>
                        <p className="text-muted-foreground">
                           Our dedicated team is available 24/7 to assist you, from choosing the right package to supporting you throughout your travels.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
