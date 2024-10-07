"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import DemoRequest from "./demo-request";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  // FormLabel,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
});

const SubmitEmailForm = () => {
  const [isDemo, setIsDemo] = useState({ state: false, email: "" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsDemo({ state: true, email: values.email });
    form.clearErrors();
    form.reset();
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`relative rounded-full bg-orange-100 p-2 shadow-md ${form.formState.errors.email && "border-2 border-red-500"}`}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="What's your business email?"
                    className="rounded-full border-none bg-transparent pr-44 outline-none ring-0 ring-transparent"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="absolute right-2 top-1/2 -translate-y-1/2">
            <span className="max-sm:hidden">Get started for free</span>
            <span className="sm:hidden">Get started</span>
          </Button>
        </form>
      </Form>
      <DemoRequest isDemo={isDemo} setIsDemo={setIsDemo} />
    </>
  );
};

export default SubmitEmailForm;
