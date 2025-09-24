"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Mail, Phone } from "lucide-react";
import Link from 'next/link';

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // Open after 5 seconds to not impact initial load

    return () => clearTimeout(timer);
  }, []);

  const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-3 text-green-500">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 10.95A8.07 8.07 0 0 1 14 11c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-1.42.37-2.75 1-4 .5-.83 1.2-1.58 2-2.22"></path>
    </svg>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Have questions? We're here to help!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-4 text-muted-foreground">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-primary" />
              <a href="tel:+1234567890" className="hover:text-primary">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-primary" />
              <a
                href="mailto:info@sadidtravels.com"
                className="hover:text-primary"
              >
                info@sadidtravels.com
              </a>
            </div>
            <div className="flex items-center">
              <WhatsappIcon />
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
