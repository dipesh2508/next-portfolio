"use client";
import { MdOutlineSms } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

//Socials
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

import emailjs from "emailjs-com";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    console.log(form.current);
    emailjs
      .send(
        "service_d1px4bu",
        "template_k3prvhn",
        form.current!,
        "OmcnBblli6XgtWXWU",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="h-auto bg-dark-2 bg-opacity-95 p-8 md:px-28 md:py-20">
      <div className="mb-8 flex flex-col items-center">
        <h1 className="font-serif text-2xl text-light-1 md:text-5xl ">
          Contact Me
        </h1>
        <div className="mt-1 h-1.5 w-28 rounded-xl bg-cta text-cta md:mt-2 md:h-2.5 md:w-52"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="mx-8 md:ml-20 mt-6 order-2 md:order-1">
          <h3 className="text-left text-xl font-light text-light-1">
            CONTACT INFO
          </h3>
          <h2 className="text-left text-4xl font-semibold text-light-1">
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
            <div className="mt-6 flex flex-row gap-6 items-center m-auto md:m-0">
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
        <div className="col-span-2 mt-8 md:mt-0 mx-6 md:mx-12 order-1 md:order-2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-2 focus-within:border-cta"
          >
            <label htmlFor="name" className="text-lg font-light text-light-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="rounded-md border-2 border-light-1 bg-transparent p-2 text-secondary focus:outline-1 focus:outline-cta"
            />
            <label htmlFor="email" className="text-lg font-light text-light-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="rounded-md border-2 border-light-1 bg-transparent p-2 text-secondary focus:outline-1 focus:outline-cta active:border-cta"
            />
            <label
              htmlFor="message"
              className="text-lg font-light text-light-1"
            >
              Your Message
            </label>
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
              className="rounded-md border-2 border-light-1 bg-transparent p-2 text-secondary focus:border-cta focus:outline-1 focus:outline-cta"
            ></textarea>
            <Button type="submit" variant="cta" className="btn btn-primary">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
