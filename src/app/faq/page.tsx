import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faqHeaderImage = PlaceHolderImages.find(p => p.id === 'islamic-architecture');

export default function FAQPage() {
  return (
    <div>
      <section className="relative py-20 md:py-32 bg-secondary">
        {faqHeaderImage && (
            <Image
                src={faqHeaderImage.imageUrl}
                alt={faqHeaderImage.description}
                fill
                className="object-cover opacity-50"
                data-ai-hint={faqHeaderImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our services and your journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-card p-8 rounded-lg shadow-lg">
                 <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={faq.id} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">
                            {faq.answer}
                        </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </section>
    </div>
  );
}
