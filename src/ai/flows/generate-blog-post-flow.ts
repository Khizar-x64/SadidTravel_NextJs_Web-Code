'use server';
/**
 * @fileOverview An AI flow for generating blog posts.
 *
 * - generateBlogPost - A function that creates blog content based on a title and excerpt.
 * - GenerateBlogPostInput - The input type for the function.
 * - GenerateBlogPostOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Define the schema for the tool's output, which includes the source and URL
const CitationSchema = z.object({
    source: z.string().describe("The name of the source website (e.g., 'Quran.com', 'Sunnah.com')."),
    url: z.string().url().describe('The full URL of the citation.'),
});

// Define the tool for finding Islamic citations
const findIslamicCitations = ai.defineTool(
  {
    name: 'findIslamicCitations',
    description: 'Finds and returns citations from reputable Islamic sources like Quran.com and Sunnah.com based on the blog post content.',
    inputSchema: z.object({
        topics: z.array(z.string()).describe("A list of topics or keywords from the blog post to find citations for."),
    }),
    outputSchema: z.array(CitationSchema),
  },
  async (input) => {
    // In a real application, this would involve searching the web.
    // For this example, we will return some mock data based on topics.
    const citations: z.infer<typeof CitationSchema>[] = [];
    if (input.topics.some(t => t.toLowerCase().includes('umrah'))) {
        citations.push({ source: 'Sunnah.com - Book of Hajj', url: 'https://sunnah.com/bukhari/25' });
    }
    if (input.topics.some(t => t.toLowerCase().includes('madinah'))) {
         citations.push({ source: 'Quran.com - Surah Al-Ahzab', url: 'https://quran.com/33' });
    }
    return citations;
  }
);


export const GenerateBlogPostInputSchema = z.object({
  title: z.string().describe('The title of the blog post.'),
  excerpt: z.string().describe('A short summary or excerpt of the blog post.'),
});
export type GenerateBlogPostInput = z.infer<typeof GenerateBlogPostInputSchema>;


export const GenerateBlogPostOutputSchema = z.object({
  content: z.string().describe("The full, well-structured blog post content in markdown format. Use **bold** for emphasis."),
  citations: z.array(CitationSchema).optional().describe("A list of sources cited in the article."),
});
export type GenerateBlogPostOutput = z.infer<typeof GenerateBlogPostOutputSchema>;


export async function generateBlogPost(input: GenerateBlogPostInput): Promise<GenerateBlogPostOutput> {
  return generateBlogPostFlow(input);
}


const prompt = ai.definePrompt({
  name: 'generateBlogPostPrompt',
  input: { schema: GenerateBlogPostInputSchema },
  output: { schema: GenerateBlogPostOutputSchema },
  tools: [findIslamicCitations],
  prompt: `You are an expert Islamic writer for Sadid Travels, a premium travel agency.
Your task is to write a full, engaging, and informative blog post based on the provided title and excerpt.

The post should be well-structured with clear paragraphs.
Use **bold markdown** for emphasis on key terms.
Crucially, you MUST use the 'findIslamicCitations' tool to include at least one relevant citation from the Quran or Sunnah to support the post's content.

Blog Title: {{{title}}}
Excerpt: {{{excerpt}}}
`,
});


const generateBlogPostFlow = ai.defineFlow(
  {
    name: 'generateBlogPostFlow',
    inputSchema: GenerateBlogPostInputSchema,
    outputSchema: GenerateBlogPostOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
