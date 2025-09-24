"use server";

import { assistQuestion, type AssistQuestionInput } from "@/ai/flows/contact-form-question-assistant";
import { generateBlogPost, type GenerateBlogPostInput } from "@/ai/flows/generate-blog-post-flow";

export async function assistQuestionAction(input: AssistQuestionInput) {
    try {
        const result = await assistQuestion(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("Error in assistQuestionAction:", error);
        return { success: false, error: error instanceof Error ? error.message : "An unknown error occurred." };
    }
}

export async function generateBlogPostAction(input: GenerateBlogPostInput) {
    try {
        const result = await generateBlogPost(input);
        return { success: true, data: result };
    } catch (error) {
        console.error("Error in generateBlogPostAction:", error);
        return { success: false, error: error instanceof Error ? error.message : "An unknown error occurred." };
    }
}
