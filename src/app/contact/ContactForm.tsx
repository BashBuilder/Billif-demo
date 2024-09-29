"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactForm = () => {
  return (
    <form className="max-w-lg basis-1/2 space-y-6 rounded-md bg-white/50 p-8 shadow-md backdrop:blur">
      <h3 className="text-orange-dark text-2xl font-semibold">
        Stay in control
      </h3>
      <Label className="flex flex-col gap-2">
        <span>Work email</span>
        <Input />
      </Label>
      <Label className="flex flex-col gap-2">
        <span>First name</span>
        <Input />
      </Label>
      <Label className="flex flex-col gap-2">
        <span>Business name</span>
        <Input />
      </Label>
      <Label className="flex flex-col gap-2">
        <span>Phone number</span>
        <PhoneInput defaultCountry="NG" />
      </Label>
      <Label className="flex flex-col gap-2">
        <span>Message</span>
        <Textarea rows={4} className="resize-none" />
      </Label>
      <Button>Submit</Button>
    </form>
  );
};

export default ContactForm;
