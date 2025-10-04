
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// IMPORTANT: Create an account at https://resend.com and generate an API key.
// Add the API key to your .env file as RESEND_API_KEY.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, category, question } = body;

    // Ensure the API key is available
    if (!process.env.RESEND_API_KEY) {
        console.error("Resend API key is not configured. Please add RESEND_API_KEY to your .env file.");
        throw new Error("Server configuration error: Email service is not set up.");
    }

    const { data, error } = await resend.emails.send({
      // IMPORTANT: Resend's free plan requires you to verify your 'from' domain.
      // For testing, they provide a default 'onboarding@resend.dev' address.
      // For production, you should use your own verified domain (e.g., 'noreply@sadidtravels.com').
      from: 'Sadid Travels Inquiry <onboarding@resend.dev>',
      to: ['sadidtravelsllc@gmail.com'], // Your destination email
      subject: `New Inquiry from ${name} - ${category}`,
      reply_to: email, // Set the user's email as the reply-to address
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Category:</strong> ${category}</p>
            <h3>Question:</h3>
            <p>${question}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      throw new Error("Failed to send message through email service.");
    }
    
    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });

  } catch (error: any) {
    console.error("Error in contact API route:", error);
    return NextResponse.json({ message: error.message || "Error sending message" }, { status: 500 });
  }
}
