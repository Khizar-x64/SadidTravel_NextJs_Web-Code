
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { destinations, blogs, packages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpenText, Newspaper, Package as PackageIcon, Landmark } from "lucide-react";
import { PackageCard } from "@/components/package-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const formatContent = (text: string) => {
    // Group list items for proper <ul> wrapping
    const elements = [];
    const paragraphs = text.split('\n').filter(p => p.trim() !== '');
    let listItems: JSX.Element[] = [];

    const processParagraph = (paragraph: string, index: number) => {
        const bolded = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        if (bolded.trim().startsWith('* ')) {
            return (
                <li key={index} dangerouslySetInnerHTML={{ __html: bolded.substring(2) }} />
            );
        }
        if (bolded.startsWith('### ')) {
            return (
                <h3 key={index} className="text-xl font-bold mt-6 mb-3 font-headline text-accent" dangerouslySetInnerHTML={{ __html: bolded.substring(4) }} />
            );
        }
        return <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: bolded }} />;
    };

    paragraphs.forEach((p, i) => {
        const processed = processParagraph(p, i);
        if (processed.type === 'li') {
            listItems.push(processed);
        } else {
            if (listItems.length > 0) {
                elements.push(<ul key={`ul-${i - listItems.length}`} className="list-disc ml-5 mb-4 space-y-2">{listItems}</ul>);
                listItems = [];
            }
            elements.push(processed);
        }
    });

    if (listItems.length > 0) {
        elements.push(<ul key="ul-last" className="list-disc ml-5 mb-4 space-y-2">{listItems}</ul>);
    }

    return elements;
};


export default function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const dest = destinations.find((d) => d.slug === params.slug);

  if (!dest) {
    notFound();
  }

  const relatedBlogs = blogs.filter(b => dest.related_blogs.includes(b.slug));
  const relatedPackages = packages.filter(p => dest.related_packages.includes(p.slug));

  return (
    <div className="bg-background">
      {/* Header Section */}
      <section className="relative h-80 md:h-96">
        <Image
          src={dest.image.imageUrl}
          alt={dest.image.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={dest.image.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-headline font-bold text-white shadow-text animate-slide-up-and-fade">
                    {dest.name}
                </h1>
                <p className="mt-2 max-w-3xl text-lg text-white/90 shadow-text animate-slide-up-and-fade" style={{animationDelay: '0.2s'}}>
                    {dest.short_description}
                </p>
            </div>
        </div>
      </section>


      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full h-auto p-1 rounded-lg bg-secondary grid grid-cols-1 sm:grid-cols-2 gap-1">
                <TabsTrigger value="overview" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-sm flex items-center justify-center gap-2 py-2">
                    <BookOpenText className="h-5 w-5" />
                    <span>Historical Overview</span>
                </TabsTrigger>
                <TabsTrigger value="sites" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-sm flex items-center justify-center gap-2 py-2">
                    <Landmark className="h-5 w-5" />
                    <span>Key Islamic Sites</span>
                </TabsTrigger>
              </TabsList>
              <div className="pt-2 mt-4">
                <TabsContent value="overview" className="bg-primary text-primary-foreground rounded-lg p-6">
                   <div className="prose prose-lg max-w-none text-primary-foreground/90 prose-p:mb-4">
                     {formatContent(dest.long_description)}
                   </div>
                </TabsContent>
                <TabsContent value="sites" className="bg-primary text-primary-foreground rounded-lg p-6">
                   <div className="prose prose-lg max-w-none text-primary-foreground/90 prose-p:mb-4">
                     {formatContent(dest.key_sites)}
                   </div>
                </TabsContent>
              </div>
            </Tabs>
            
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

          {/* Right Column: Related Content */}
          <div className="space-y-8 lg:sticky top-24 self-start">
            {relatedBlogs.length > 0 && (
                <Card className="bg-card text-card-foreground shadow-lg">
                <CardHeader className="bg-secondary">
                    <CardTitle className="font-headline text-2xl flex items-center text-secondary-foreground">
                    <Newspaper className="mr-3 h-6 w-6" />
                    Related Insights
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 p-4">
                    {relatedBlogs.map(blog => (
                    <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group block p-3 rounded-lg hover:bg-secondary transition-colors">
                        <h3 className="font-semibold group-hover:text-accent">{blog.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>
                    </Link>
                    ))}
                </CardContent>
                </Card>
            )}

            <Button asChild size="lg" className="w-full font-bold" variant="accent">
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
