
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogHeaderImage = PlaceHolderImages.find(p => p.id === 'blog-spiritual-journey');

export default function BlogsPage() {
  const commitmentSectionStyle = {
      backgroundColor: '#ffffff',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23d1be68' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
  };
  return (
    <div>
      <section className="bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="py-20 md:py-32 animate-slide-up-and-fade">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">
                Our Blog
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Insights, tips, and stories to inspire your spiritual travels.
              </p>
            </div>
            <div className="h-64 md:h-[450px] relative animate-fade-in">
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

      <section className="py-12 md:py-24" style={commitmentSectionStyle}>
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
