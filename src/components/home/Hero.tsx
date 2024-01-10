import { Button } from "../ui/button";
import { whisper } from "@/lib/fonts/font";
import Image from "next/image";
import hero from "@/assets/Hero.png";

import React from "react";
import ParticleBackground from "@/components/design/ParticleBackground";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="grid h-screen w-full grid-cols-1 items-center pt-20 text-center text-light-1 md:grid-cols-2 md:text-right"
      >
        <div className="mx-10 flex flex-col md:mx-0 md:ml-20">
          <div className="text-xs italic md:text-base">
            I am <span className="text-secondary">Dipesh Ranjan</span>
          </div>
          <div className="pb-4 font-serif text-4xl md:pb-8 md:text-8xl">
            Web <span className="text-primary">Dev</span>eloper <br />{" "}
            <span className={`text-4xl md:text-8xl ${whisper.className}`}>
              & <span className="text-cta">Design</span>er
            </span>
          </div>
          <div className="md:font-base text-xs italic  md:text-base">
            I weave together threads of creativity and logic, crafting expansive
            websites that sing with beauty, respond to every need, and delight
            the user&#39;s senses.
          </div>
          <div className="mt-8 flex flex-row justify-center gap-3 md:justify-end md:gap-8">
            {/* Buttons */}
            <a href={"/Resume.pdf"} download="resume_dipesh.pdf">
              {" "}
              <Button>Download CV</Button>
            </a>
            <Link href="#contact">
            <Button variant="cta">Let&#39;s Talk</Button>{" "}
            </Link>
          </div>
        </div>
        <div className="mx-auto -mt-16 flex h-72 w-72 items-center justify-center md:mx-0 md:ml-16 md:mt-0 md:h-[500px] md:w-[500px]">
          {" "}
          <Image src={hero} alt="dipesh" loading="lazy" className="transition duration-150 ease-in-out" />
        </div>
      </section>
      <div className="relative -z-10">
        <ParticleBackground />
      </div>
    </>
  );
};

export default Hero;
