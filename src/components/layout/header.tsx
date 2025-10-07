"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Mail, Menu, Phone, X } from "lucide-react";

import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="bg-secondary text-secondary-foreground py-1">
        <div className="container flex justify-between items-center h-10 text-xs">
           <div className="flex items-center gap-4">
              <a href="tel:+17543992498" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+1 754-399-2498</span>
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:sadidtravelsllc@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">sadidtravelsllc@gmail.com</span>
              </a>
           </div>
           <div className="flex items-center gap-2">
            <p className="hidden md:block">Follow Us:</p>
            <Link href={siteConfig.links.facebook} passHref>
                <Button variant="ghost" size="icon" aria-label="Facebook" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
            </Link>
            <Link href={siteConfig.links.instagram} passHref>
                <Button variant="ghost" size="icon" aria-label="Instagram" className="h-8 w-8">
                  <Instagram className="h-4 w-4" />
                </Button>
              </Link>
           </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container flex h-20 items-center">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Icons.Logo />
        </Link>
        
        {/* Mobile Menu Trigger */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-auto px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <SheetHeader className="mb-8">
              <SheetTitle>
                <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <Icons.Logo />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-3">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-lg font-medium transition-colors hover:text-primary rounded-l-full",
                    pathname === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
             <Button asChild className="mt-8 w-4/5" onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="/packages">Book Now</Link>
            </Button>
          </SheetContent>
        </Sheet>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center flex-1 space-x-6 text-sm font-medium md:flex">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary font-bold"
                  : "text-foreground/60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center justify-end">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex ml-4">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
