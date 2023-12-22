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

const Contact = () => {
  return (
    <section id="contact" className="h-auto bg-dark-2 p-8 md:p-28">
      <div className="mb-8 flex flex-col items-center">
        <h1 className="font-serif text-2xl text-light-1 md:text-5xl ">
          Contact Me
        </h1>
        <div className="mt-1 h-1.5 w-28 rounded-xl bg-cta text-cta md:mt-2 md:h-2.5 md:w-52"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="ml-20">
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
            <div className="mt-6 flex flex-row gap-6">
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
        <div className="col-span-3"></div>
      </div>
    </section>
  );
};

export default Contact;
