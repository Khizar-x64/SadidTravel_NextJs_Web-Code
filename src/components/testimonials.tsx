import { Star, MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              What Our Pilgrims Say
            </h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Stories from those who have journeyed with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                     <div className="bg-accent/20 p-3 rounded-full">
                        <MessageSquare className="h-6 w-6 text-accent" />
                     </div>
                     <CardTitle className="font-bold text-primary-foreground">{testimonial.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/90 italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
}
