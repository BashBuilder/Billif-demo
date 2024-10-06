"use client";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2),
  businessName: z.string().min(2),
  phoneNumber: z.string().min(9),
  message: z.string().min(10),
});

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      businessName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // handleSendDemo(payload)
    // .then(() => {
    toast({
      description: (
        <div className="space-y-2">
          <h2 className="font-heading text-2xl font-semibold text-emerald-500">
            Success
          </h2>
          <p>
            Your message was successfully delivered. We will get back to you
            shortly.
          </p>
        </div>
      ),
    });
    form.setValue("message", "");
    form.reset();
    // })
    // .catch((error) => console.log(error));
    // }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-lg basis-1/2 space-y-6 rounded-md bg-white/50 p-8 shadow-md backdrop:blur"
      >
        <h3 className="text-2xl font-semibold text-orange-dark">
          Stay in control
        </h3>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={`${form.formState.errors.firstName ? "border border-red-500" : "border-none"}`}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={`${form.formState.errors.businessName ? "border border-red-500" : "border-none"}`}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Work email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={`${form.formState.errors.email ? "border border-red-500" : "border-none"}`}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <PhoneInput
                  defaultCountry="NG"
                  {...field}
                  className={`${form.formState.errors.phoneNumber ? "border border-red-500" : "border-none"}`}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  {...field}
                  className={`${form.formState.errors.message && "resize-none border border-red-500"}`}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full">Submit</Button>
      </form>
    </Form>
  );
};

export default ContactForm;
