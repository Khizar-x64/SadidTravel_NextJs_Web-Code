import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

type BlogDetailPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogDetailPageProps) {
  const post = blogs.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = blogs.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const formatContent = (text: string) => {
    // Split by newline and process each paragraph
    const paragraphs = text.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null;

      // Handle simple markdown for bolding and list items
      const bolded = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      if (bolded.trim().startsWith('* ')) {
        // Unordered list item
        return (
          <li key={index} className="ml-5 list-disc" dangerouslySetInnerHTML={{ __html: bolded.substring(2) }} />
        );
      }
      
      // Regular paragraph
      return (
        <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: bolded }} />
      );
    }).filter(Boolean); // remove null entries

    // Group list items into a <ul>
    const content = [];
    let listItems: JSX.Element[] = [];

    for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i];
        if (p.type === 'li') {
            listItems.push(p);
        } else {
            if (listItems.length > 0) {
                content.push(<ul key={`ul-${i-listItems.length}`} className="mb-4 space-y-2">{listItems}</ul>);
                listItems = [];
            }
            content.push(p);
        }
    }
    if (listItems.length > 0) {
        content.push(<ul key={`ul-last`} className="mb-4 space-y-2">{listItems}</ul>);
    }
    
    return content;
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
