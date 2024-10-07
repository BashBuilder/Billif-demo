"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { useToast } from "@/hooks/use-toast";
import { handleSendWaitlist } from "@/lib/api-request";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2),
  businessName: z.string().min(2),
  phoneNumber: z.string().min(9),
});

const WaitListForm = () => {
  const { toast } = useToast();
  const router = useRouter();

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
      const payload: {
        title: string;
        email: string;
        firstName: string;
        businessName: string;
        phoneNumber: string;
      } = {
        ...values,
        title: "Waitlist",
      };
      await handleSendWaitlist(payload);

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
      router.push("/");
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 rounded-md bg-white/50"
      >
        <h3 className="text-2xl font-semibold text-orange-dark">
          Join waitlist
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
                  className={`${form.formState.errors.firstName && "border border-red-500"}`}
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
                  className={`${form.formState.errors.businessName && "border border-red-500"}`}
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
                  className={`${form.formState.errors.email && "border border-red-500"}`}
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
                  className={`${form.formState.errors.phoneNumber && "border border-red-500"}`}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default WaitListForm;
