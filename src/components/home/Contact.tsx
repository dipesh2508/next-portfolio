"use client";
import { MdOutlineSms } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
} from "react-icons/fa6";
import Link from "next/link";
import { sendEmail } from "@/app/actions/sendEmail";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);

      const result = await sendEmail(formData);

      if (result.success) {
        toast({
          title: "Message sent",
          description: "Thank you for your message. I'll get back to you soon!",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="h-auto bg-dark-2 bg-opacity-95 p-8 md:px-28 md:py-20"
    >
      <div className="mb-8 flex flex-col items-center">
        <h1 className="font-serif text-2xl text-light-1 md:text-5xl ">
          Contact Me
        </h1>
        <div className="mt-1 h-1.5 w-28 rounded-xl bg-cta text-cta md:mt-2 md:h-2.5 md:w-52"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="order-2 mx-8 mt-16 md:order-1 md:ml-20 md:mt-6">
          <h3 className="text-center text-lg font-light text-light-1 md:text-left md:text-xl">
            CONTACT INFO
          </h3>
          <h2 className="text-center text-2xl font-semibold text-light-1 md:text-left md:text-4xl">
            GET IN TOUCH
          </h2>
          <div className="m-auto mt-12 flex flex-col items-start gap-6 text-light-1">
            <div className="flex flex-row gap-4">
              <div className="m-auto h-6  w-6 items-center">
                <MdOutlineSms className="h-6 w-6 text-cta " />
              </div>
              <div>
                <h4>Talk to Me</h4>
                <h5 className="text-sm font-light">sinhadipesh25@gmail.com</h5>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="m-auto h-6  w-6 items-center">
                <IoPhonePortraitOutline className="h-6 w-6 text-cta " />
              </div>
              <div>
                <h4>Call Me</h4>
                <h5 className="text-sm font-light">+91-629-(903)-5580</h5>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="m-auto h-6  w-6 items-center">
                <IoLocationOutline className="h-6 w-6 text-cta " />
              </div>
              <div>
                <h4>Address</h4>
                <h5 className="text-sm font-light">
                  Sector-55, Faridabad, Haryana, India -121004
                </h5>
              </div>
            </div>
            <div className="m-auto mt-6 flex flex-row items-center gap-6 md:m-0">
              <Link href="https://www.instagram.com/dipesh_ranjan07">
                <FaInstagram className="h-8 w-8 text-secondary hover:text-cta" />
              </Link>
              <Link href="https://www.linkedin.com/in/dipesh-ranjan">
                <FaLinkedinIn className="h-8 w-8 text-secondary hover:text-cta" />
              </Link>
              <Link href="https://www.github.com/dipesh2508">
                <FaGithub className="h-8 w-8 text-secondary hover:text-cta" />
              </Link>
              <Link href="https://twitter.com/DipeshRanjan12">
                <FaXTwitter className="h-8 w-8 text-secondary hover:text-cta" />
              </Link>
              <Link href="https://www.facebook.com/dipesh.ranjan.007">
                <FaFacebook className="h-8 w-8 text-secondary hover:text-cta" />
              </Link>
            </div>
          </div>
        </div>
        <div className="order-1 col-span-2 mx-6 mt-8 md:order-2 md:mx-12 md:mt-0">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-light text-light-1">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Full Name"
                        className="rounded-md border-2 border-light-1 bg-transparent p-2 text-secondary focus:outline-1 focus:outline-cta"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-light text-light-1">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Email"
                        className="rounded-md border-2 border-light-1 bg-transparent p-2 text-secondary focus:outline-1 focus:outline-cta"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-light text-light-1">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        className="rounded-md border-2 border-light-1 bg-transparent p-2 text-secondary focus:outline-1 focus:outline-cta"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="cta" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <svg
                      className="mr-2 h-4 w-4 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
