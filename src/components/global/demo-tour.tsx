"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";
import { Download, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState, useRef } from "react";
import Link from "next/link";

const formSchema = z.object({
  firstName: z.string().min(2),
  businessName: z.string().min(2),
  phoneNumber: z.string().min(9),
  email: z.string().email(),
});

const DemoTour = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const donwloadDoc = useRef<HTMLAnchorElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      businessName: "",
      phoneNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const payload: DemoDataType = {
        ...values,
        message: `${values.businessName} with email ${values.email} is requesting to get demo tour`,
        title: "DEMO TOUR",
      };

      await fetch("/api/send-slack-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      donwloadDoc?.current?.click();
      setOpen(false);
      toast({
        description: (
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold text-emerald-500">
              Success
            </h2>
            <p>Demo tour downloaded</p>
          </div>
        ),
      });
      form.reset();
      // eslint-disable-next-line
    } catch (error) {
      toast({
        variant: "destructive",
        description: (
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold text-emerald-500">
              Failure
            </h2>
            <p>Something went wrong</p>
          </div>
        ),
      });
    }
  }

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button className="flex items-center gap-2 border border-primary bg-transparent text-primary hover:bg-blue-50">
            Get Deck <Download size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-blue-50">
          <DialogHeader>
            <DialogTitle>
              <h3 className="mx-auto max-w-lg px-8 pb-4 text-2xl font-semibold text-primary">
                Get Deck
              </h3>
            </DialogTitle>
            <DialogDescription>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="mx-auto max-w-lg space-y-4 px-8 py-4"
                >
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`bg-opacity-5 ${form.formState.errors.firstName ? "border-2 border-red-500" : "border-none"}`}
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
                        <FormLabel>Business Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className={`bg-opacity-5 ${form.formState.errors.firstName ? "border-2 border-red-500" : "border-none"}`}
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
                            className={`bg-opacity-5 ${form.formState.errors.phoneNumber ? "border-2 border-red-500" : "border-none"} `}
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
                            className={`border-none bg-opacity-5 ${form.formState.errors.phoneNumber && "border-2 border-red-500"} `}
                            defaultCountry="NG"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Download Deck"
                    )}
                  </Button>
                </form>
              </Form>
              <Link
                href="/file/GetBillif Pitch Deck.pdf"
                download={true}
                className="hidden"
                target="_blank"
                ref={donwloadDoc}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DemoTour;
