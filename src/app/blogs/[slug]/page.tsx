import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

type BlogDetailPageProps = {
  params: {
    slug: string;
  };
};

// This function allows Next.js to generate static pages for each blog post at build time
export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

// This component renders the individual blog page
export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogs.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Simple markdown parsing for bold text, paragraphs and unordered lists
  const formatContent = (text: string) => {
    return text.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;
      
      // A simple regex to replace **bold** text with <strong> tags
      let formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Handle unordered lists
      if (formattedParagraph.trim().startsWith('* ')) {
          return (
              <li key={index} className="ml-5 list-disc" dangerouslySetInnerHTML={{ __html: formattedParagraph.substring(2) }} />
          );
      }
      
      return <p key={index} dangerouslySetInnerHTML={{ __html: formattedParagraph }} />;
    });
  };

  return (
    <div className="bg-background">
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src={post.image.imageUrl}
          alt={post.image.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={post.image.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto h-full flex flex-col items-start justify-end text-white p-4 md:p-8">
          <Badge variant="secondary" className="mb-4">
            Blog Post
          </Badge>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            {post.title}
          </h1>
          <div className="mt-4 text-primary-foreground/90 text-lg">
            <span>By {post.author}</span> | <span>Published on {post.date}</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto py-12 px-4 max-w-4xl">
        <div className="prose prose-lg max-w-none dark:prose-invert text-foreground space-y-4">
            {formatContent(post.content)}
        </div>
      </article>
    </div>
  );
}
