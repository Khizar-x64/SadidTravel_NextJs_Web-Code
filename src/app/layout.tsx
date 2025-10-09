
import type { Metadata } from "next";
import { Playfair_Display, PT_Sans, Amiri } from 'next/font/google';
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
import WhatsAppFAB from "@/components/whatsapp-fab";

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-playfair-display',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-pt-sans',
});

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-amiri',
});


export const metadata: Metadata = {
  title: "Sadid Travels - Premium Islamic Travel Agency",
  description:
    "Explore premium Umrah, Hajj, and Islamic tour packages with Sadid Travels. Your journey of faith starts here.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${ptSans.variable} ${amiri.variable}`} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased light"
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <Toaster />
      </body>
    </html>
  );
}
