'use server';
/**
 * @fileOverview An AI assistant for framing contact form inquiries.
 *
 * - assistQuestion - A function that helps users frame their contact form question.
 * - AssistQuestionInput - The input type for the assistQuestion function.
 * - AssistQuestionOutput - The return type for the assistQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssistQuestionInputSchema = z.object({
  question: z
    .string()
    .describe('The user question for the contact form.'),
  category: z
    .string()
    .optional()
    .describe('The category of the question, such as "Umrah", "Hajj", or "Tours".'),
});
export type AssistQuestionInput = z.infer<typeof AssistQuestionInputSchema>;

const AssistQuestionOutputSchema = z.object({
  refinedQuestion: z.string().describe('The refined question for the user.'),
});
export type AssistQuestionOutput = z.infer<typeof AssistQuestionOutputSchema>;

export async function assistQuestion(input: AssistQuestionInput): Promise<AssistQuestionOutput> {
  return assistQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assistQuestionPrompt',
  input: {schema: AssistQuestionInputSchema},
  output: {schema: AssistQuestionOutputSchema},
  prompt: `You are a helpful assistant for an Islamic travel agency called Sadid Travels.
Your job is to refine the user's question so that the agency can provide the most helpful response.
Consider the question category when refining the question.

Original Question: {{{question}}}
Category: {{category}}

Refined Question:`, // Ensure the AI returns only the refined question.
});

const assistQuestionFlow = ai.defineFlow(
  {
    name: 'assistQuestionFlow',
    inputSchema: AssistQuestionInputSchema,
    outputSchema: AssistQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {refinedQuestion: output!.refinedQuestion};
  }
);
