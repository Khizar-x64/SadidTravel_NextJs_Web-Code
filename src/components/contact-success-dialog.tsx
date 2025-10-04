"use client";

import { CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";

type ContactSuccessDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ContactSuccessDialog({ open, onOpenChange }: ContactSuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader className="items-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <DialogTitle className="text-2xl font-headline">Message Sent!</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            JazakAllah Khair! Thank you for reaching out. We have received your message and will get back to you shortly, insha'Allah.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
            <Button type="button" onClick={() => onOpenChange(false)}>
                Close
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
