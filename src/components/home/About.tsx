// Import necessary icons from react-icons
import { FaLaptopCode } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { BsWindow } from "react-icons/bs";

import { MotionDiv } from "@/components/animations/motionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const aboutCards = [
  {
    icon: FaLaptopCode,
    iconBg: "bg-teal-900",
    iconColor: "text-secondary",
    title: "Development Projects",
    description: "Developed 15+ projects with various domains like Web Dev and ML.",
    delay: 0.3,
  },
  {
    icon: HiAcademicCap,
    iconBg: "bg-emerald-800",
    iconColor: "text-primary",
    title: "Research Works",
    description: "Have Written Research Papers on Topics like Geospatial Landslides and Healthcare",
    delay: 0.6,
  },
  {
    icon: BsWindow,
    iconBg: "bg-purple-900",
    iconColor: "text-cta",
    title: "UI/UX Designs",
    description: "Designed UI/UX Files for various sites using various design theories and Figma.",
    delay: 0.9,
  },
];

// Define the About component
const About = () => {
  return (
    <section id="about" className="h-auto bg-dark-2 bg-opacity-95 p-8 md:p-28">
      <div className="flex flex-col items-center">
        <h1 className="font-serif text-2xl text-light-1 md:text-5xl ">
          About Me
        </h1>
        <div className="mt-1 h-1.5 w-28 rounded-xl bg-cta text-cta md:mt-2 md:h-2.5 md:w-52"></div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:mt-12 md:grid-cols-4">
        <div className="col-span-1 mt-2 flex flex-col items-center md:mt-10">
          <div className="font-serif text-5xl text-light-1 md:text-9xl">1.5+</div>
          <div className="mt-4 flex flex-col items-center font-serif text-xl font-semibold text-light-1 md:text-4xl">
            <div className="flex flex-row items-center gap-2 md:flex-col ">
              <div className="text-cta">Years</div> <div>Development</div>
            </div>
            <div>Experience</div>
          </div>
        </div>

        <div className="col-span-3">
          <p className="mt-6 text-center font-sans text-sm font-extralight text-light-1 md:mt-0 md:text-left md:text-lg">
            I am a Passion driven final year CSE student at Chandigarh University.
            Web development enthusiast, crafting dynamic apps with MERN, Next.js
            & Tailwind CSS. Keen eye for UI/UX, building user-centric
            experiences. curious about exploring new tech horizons. Committed,
            skilled, and ready to impact your team!
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Projects */}
            {aboutCards.map((card, index) => (
              <MotionDiv
                key={index}
                variants={variants}
                initial="hidden"
                transition={{
                  delay: card.delay,
                  ease: "easeInOut",
                  duration: 0.4,
                }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="opacity-85 mx-8 flex flex-col gap-2 rounded-xl bg-dark-1 px-4 py-6 backdrop-blur-2xl md:mx-0"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${card.iconBg} p-0.5`}>
                  <card.icon className={`h-10 w-10 ${card.iconColor}`} />
                </div>
                <h3 className="font-serif text-base font-semibold text-light-1 md:text-xl md:font-medium">
                  {card.title}
                </h3>
                <p className="text-xs font-extralight text-light-1 md:text-base">
                  {card.description}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
