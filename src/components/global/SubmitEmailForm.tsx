"use client";
import ContactForm from "@/app/(website)/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export function ContactUsDialog() {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full">
            Contact Us
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <ContactForm closeDialog={closeModal} />
        </DialogContent>
      </form>
    </Dialog>
  );
}
