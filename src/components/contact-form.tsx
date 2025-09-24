"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { assistQuestionAction } from "@/app/actions";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  category: z.string().nonempty({ message: "Please select a category." }),
  question: z.string().min(10, { message: "Question must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      question: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // In a real app, you would send this to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  };

  const handleAssistQuestion = () => {
    const question = form.getValues("question");
    const category = form.getValues("category");

    if (!question || question.length < 10) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please write a question of at least 10 characters before using the AI assistant.",
      });
      return;
    }
    
    startTransition(async () => {
        const result = await assistQuestionAction({ question, category });
        if (result.success && result.data) {
          form.setValue("question", result.data.refinedQuestion, { shouldValidate: true });
          toast({
            title: "Question Refined!",
            description: "Your question has been enhanced by our AI assistant.",
          });
        } else {
            toast({
                variant: "destructive",
                title: "AI Assistant Error",
                description: result.error || "Could not refine the question at this time.",
            });
        }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Abdullah Ahmed" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inquiry Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Umrah">Umrah Packages</SelectItem>
                  <SelectItem value="Hajj">Hajj Packages</SelectItem>
                  <SelectItem value="Tours">Islamic Tours</SelectItem>
                  <SelectItem value="General">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between items-center">
                <FormLabel>Your Question</FormLabel>
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={handleAssistQuestion}
                    disabled={isPending}
                    className="text-primary hover:text-primary"
                >
                    {isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    Refine with AI
                </Button>
              </div>
              <FormControl>
                <Textarea
                  placeholder="Ask us anything about our packages, visa process, or your journey..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg">Send Message</Button>
      </form>
    </Form>
  );
}
