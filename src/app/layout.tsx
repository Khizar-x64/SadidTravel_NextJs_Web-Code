import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Amiri } from 'next/font/google';
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-cormorant-garamond',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat',
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
    <html lang="en" suppressHydrationWarning className={`${cormorantGaramond.variable} ${montserrat.variable} ${amiri.variable}`}>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased"
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
