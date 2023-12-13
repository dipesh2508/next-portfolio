import { Button } from "../ui/button";
import { whisper } from "@/lib/fonts/font";
import Image from "next/image";
import hero from '@/assets/Hero.png'

import ParticleBackground from "../design/ParticleBackground";

const Hero = () => {

  return (
    <>
    
    <section id="hero" className="hero grid h-screen grid-cols-2 text-light-1  text-right items-center pt-20">
      <div className="flex flex-col ml-20">
        <div className="text-base italic">I am <span className="text-secondary">Dipesh Ranjan</span></div>
        <div className="text-8xl font-serif pb-8">
          Web <span className="text-primary">Dev</span>eloper <br /> <span className={`text-8xl ${whisper.className}`}>& <span className="text-cta">Design</span>er</span>
        </div>
        <div className="italic font-base">
          I weave together threads of creativity and logic, crafting expansive
          websites that sing with beauty, respond to every need, and delight the
          user&#39;s senses.
        </div>
        <div className="flex flex-row gap-8 justify-end mt-8"> <Button>Download CV</Button>
        <Button variant="cta">Let&#39;s Talk</Button> </div>
        
      </div>
      <div className="ml-16 h-[500px] w-[500px]"> <Image src={hero} alt="dipesh" /></div>
    </section>
    <div className="relative -z-10">
    <ParticleBackground />
    </div>
    </>
  );
};

export default Hero;
