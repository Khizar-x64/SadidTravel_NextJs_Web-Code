
"use client";

import { Ticket, UserCheck, PlaneTakeoff } from 'lucide-react';

const UmrahPackageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M2 12h2.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2"/>
        <path d="M19.5 12H22a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2.5"/>
        <path d="M3 12V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"/>
        <path d="M3 14v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"/>
        <path d="M12 7v12"/>
        <path d="M10 7h4"/>
        <path d="M10 19h4"/>
        <path d="M15 11v4l-3-2-3 2v-4"/>
        <path d="M9 7V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/>
    </svg>
);


export default function WhySadidSection() {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
                            What Makes Sadid Travels Stand Out?
                            <span className="block h-1.5 w-24 bg-accent mt-2"></span>
                        </h2>
                    </div>
                    <div className="prose-lg text-muted-foreground">
                        <p>
                            You might be wondering what makes us the right travel agency for you. 
                            When you choose Sadid Travels, you're choosing a blend of affordability, honesty, and on-time services. With no fake promises or hidden fees, we provide Umrah packages that fit your needs and budget.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 bg-background rounded-lg shadow-md">
                        <div className="flex justify-center mb-4">
                            <PlaneTakeoff size={56} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-headline text-primary mb-2">Visa Assistance</h3>
                        <p className="text-muted-foreground">
                            With Sadid Travels, you don’t have to go through the hassle of dealing with visa processing. Let our expert team handle it for you and ensure you get your visa right on time.
                        </p>
                    </div>

                    <div className="p-6 bg-background rounded-lg shadow-md">
                         <div className="flex justify-center mb-4">
                            <UmrahPackageIcon />
                        </div>
                        <h3 className="text-xl font-bold font-headline text-primary mb-2">Tailored Umrah Packages</h3>
                        <p className="text-muted-foreground">
                            We believe your spiritual journey should be personal. We offer luxurious treatment at affordable rates and adapt our packages to your specific requests and budget.
                        </p>
                    </div>

                    <div className="p-6 bg-background rounded-lg shadow-md">
                        <div className="flex justify-center mb-4">
                           <UserCheck size={56} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold font-headline text-primary mb-2">24/7 Customer Support</h3>
                        <p className="text-muted-foreground">
                            Our team is always available for your assistance, day or night. We'll help you select the right package and be with you through every step of your journey until you return home to the USA.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
