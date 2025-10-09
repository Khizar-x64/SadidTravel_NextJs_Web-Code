import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogHeaderImage = PlaceHolderImages.find(p => p.id === 'blog-spiritual-journey');

export default function BlogsPage() {
  return (
    <div>
      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-20 md:py-32">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">
                Our Blog
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Insights, tips, and stories to inspire your spiritual travels.
              </p>
            </div>
            <div className="h-64 md:h-[450px] relative">
              {blogHeaderImage && (
                  <Image
                      src={blogHeaderImage.imageUrl}
                      alt={blogHeaderImage.description}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                      data-ai-hint={blogHeaderImage.imageHint}
                  />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <Link key={post.id} href={`/blogs/${post.slug}`} className="group block">
                <Card className="flex flex-col h-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 bg-primary text-primary-foreground">
                  <div className="relative h-56 w-full">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={post.image.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </CardTitle>
                     <CardDescription className="pt-2 text-sm text-primary-foreground/80">
                      By {post.author} on {post.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-primary-foreground/80 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <span className="font-semibold text-accent group-hover:underline">
                        Read More <ArrowRight className="inline-block h-4 w-4 ml-1" />
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
