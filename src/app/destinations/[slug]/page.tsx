import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { destinations, blogs, packages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Newspaper, Package as PackageIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PackageCard } from "@/components/package-card";

type DestinationDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

export function generateMetadata({ params }: DestinationDetailPageProps) {
  const dest = destinations.find((d) => d.slug === params.slug);

  if (!dest) {
    return { title: "Destination Not Found" };
  }

  return {
    title: `Explore ${dest.name}`,
    description: dest.short_description,
  };
}

export default function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const dest = destinations.find((d) => d.slug === params.slug);

  if (!dest) {
    notFound();
  }

  const relatedBlogs = blogs.filter(b => dest.related_blogs.includes(b.slug));
  const relatedPackages = packages.filter(p => dest.related_packages.includes(p.slug));

  return (
    <div className="bg-background">
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src={dest.image.imageUrl}
          alt={dest.image.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={dest.image.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto h-full flex flex-col items-start justify-end text-white p-4 md:p-8">
          <Badge variant="secondary" className="mb-4">Destination</Badge>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            {dest.name}
          </h1>
        </div>
      </section>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-3xl text-primary">About {dest.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>{dest.long_description}</p>
                </div>
              </CardContent>
            </Card>

            {relatedPackages.length > 0 && (
              <div className="mt-12">
                 <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-6 flex items-center">
                    <PackageIcon className="mr-3 h-7 w-7" /> Suggested Packages
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedPackages.map(pkg => (
                      <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                 </div>
              </div>
            )}
          </div>

          <div className="space-y-8 lg:sticky top-24">
            {relatedBlogs.length > 0 && (
                <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center">
                    <Newspaper className="mr-3 h-6 w-6" />
                    Related Insights
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {relatedBlogs.map(blog => (
                    <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group block">
                        <div className="p-3 rounded-lg hover:bg-secondary transition-colors">
                            <h3 className="font-semibold group-hover:text-primary">{blog.title}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                        </div>
                    </Link>
                    ))}
                </CardContent>
                </Card>
            )}

            <Button asChild size="lg" className="w-full font-bold">
              <Link href="/contact">
                Inquire About {dest.name} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
