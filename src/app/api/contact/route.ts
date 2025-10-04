// IMPORTANT: This is a simulated API route.
// In a real application, you would use a service like Nodemailer, SendGrid, or Resend
// to actually send the email. This example just simulates a successful response.

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, category, question } = body;

    // --- Developer Note ---
    // This is where you would integrate your email sending logic.
    // For example, using a service like Resend:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'sadidtravelsllc@gmail.com',
      subject: `New Inquiry from ${name} - ${category}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Category: ${category}</p><p>Question: ${question}</p>`,
    });
    */
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log("Simulated sending email with data:", body);
    
    // Always return a success response in this simulation
    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Error in contact API route:", error);
    // In a real scenario, you'd want more specific error handling
    return NextResponse.json({ message: "Error sending message" }, { status: 500 });
  }
}
