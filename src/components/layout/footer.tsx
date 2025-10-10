
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

import { siteConfig } from "@/lib/data";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  const footerNav = [
    { title: "FAQ", href: "/faq" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Refund Policy", href: "/refund" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Icons.Logo className="h-10" />
            </Link>
            <p className="max-w-xs text-primary-foreground/80">
              Your trusted partner for a spiritually fulfilling journey to the
              holy lands.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href={siteConfig.links.facebook} passHref>
                <Button variant="ghost" size="icon" aria-label="Facebook" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href={siteConfig.links.instagram} passHref>
                <Button variant="ghost" size="icon" aria-label="Instagram" className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-headline font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:underline transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary/90 text-primary-foreground/80">
        <div className="container mx-auto px-4 py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Sadid Travels. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
