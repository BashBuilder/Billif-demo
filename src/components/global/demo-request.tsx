"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
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
import { useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { handleSendContact } from "@/lib/api-request";

interface RequestPropstypes {
  setIsDemo: React.Dispatch<
    React.SetStateAction<{
      state: boolean;
      message: string;
    }>
  >;
  isDemo: {
    state: boolean;
    message: string;
  };
}

const formSchema = z.object({
  firstName: z.string().min(2),
  businessName: z.string().min(2),
  phoneNumber: z.string().min(9),
  email: z.string().email(),
});

const DemoRequest = ({ setIsDemo, isDemo }: RequestPropstypes) => {
  const drawerOpenRef = useRef<HTMLButtonElement>(null);
  const drawercloseRef = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      businessName: "",
      phoneNumber: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const payload: DemoDataType = {
        ...values,
        message: isDemo.message,
        title: "Contact",
      };
      await handleSendContact(payload);
      setIsDemo({ state: false, message: "" });
      toast({
        description: (
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold text-emerald-500">
              Success
            </h2>
            <p>
              Your contact request was successfully. We will get back to you
              shortly
            </p>
          </div>
        ),
      });
      drawercloseRef.current?.click();
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (drawerOpenRef.current && isDemo.state) {
      drawerOpenRef.current.click();
    }
  }, [isDemo]);

  return (
    <div>
      <Drawer>
        <DrawerTrigger ref={drawerOpenRef} className="hidden" />
        <DrawerContent className="bg-primary/10">
          <DrawerHeader>
            <DrawerTitle>
              <h3 className="mx-auto max-w-lg px-8 pb-4 text-2xl font-semibold text-primary">
                Contact us
              </h3>
            </DrawerTitle>
            <DrawerDescription>
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
                        <FormLabel>First Name</FormLabel>
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
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className={`border-none bg-opacity-5 ${form.formState.errors.email && "border-2 border-red-500"} `}
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
                      "Submit"
                    )}
                  </Button>
                </form>
              </Form>
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter className="hidden">
            <DrawerClose className="mx-auto max-w-lg px-8">
              <Button variant="outline" className="w-full" ref={drawercloseRef}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DemoRequest;
