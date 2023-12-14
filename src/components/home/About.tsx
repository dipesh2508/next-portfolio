import { FaLaptopCode } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { BsWindow } from "react-icons/bs";
const About = () => {
  return (
    <section id="about" className="h-auto bg-dark-2 p-8 md:p-28">
      <div className="flex flex-col items-center">
        <h1 className="font-serif text-2xl text-light-1 md:text-5xl ">
          About Me
        </h1>
        <div className="mt-1 h-1.5 w-28 rounded-xl bg-cta text-cta md:mt-2 md:h-2.5 md:w-52"></div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:mt-12 md:grid-cols-4">
        <div className="col-span-1 mt-2 flex flex-col items-center md:mt-10">
          <div className="font-serif text-5xl text-light-1 md:text-9xl">
            1.5+
          </div>
          <div className="mt-4 flex flex-col items-center font-serif text-xl font-semibold text-light-1 md:text-4xl">
            <div className="flex flex-row items-center gap-2 md:flex-col ">
              <div className="text-cta">Years</div> <div>Development</div>
            </div>
            <div>Experience</div>
          </div>
        </div>

        <div className="col-span-3">
          <p className="font-sans text-center mt-6 md:mt-0 md:text-left text-sm md:text-lg font-extralight text-light-1">
            I am a Passion driven 3rd-year CSE student at Chandigarh University.
            Web development enthusiast, crafting dynamic apps with MERN, Next.js
            & Tailwind CSS. Keen eye for UI/UX, building user-centric
            experiences. curious about exploring new tech horizons. Committed,
            skilled, and ready to impact your team!
          </p>

          <div className="mt-12 flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-2 rounded-xl bg-dark-1 backdrop-blur-2xl opacity-85 mx-8 md:mx-0 px-4 py-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-900 p-0.5">
                <FaLaptopCode className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="font-serif text-base md:text-xl font-semibold md:font-medium text-light-1">
                Development Projects
              </h3>
              <p className="text-xs md:text-base font-extralight text-light-1">
                Developed 15+ projects with various domains like Web Dev and ML.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl bg-dark-1 backdrop-blur-2xl opacity-85 mx-8 md:mx-0 px-4 py-6">
              <div className="h-12 w-12 rounded-lg bg-emerald-800 p-0.5">
                {" "}
                <HiAcademicCap className="h-11 w-11 text-primary" />
              </div>
              <h3 className="font-serif text-base md:text-xl font-semibold md:font-medium text-light-1">
                Research Works
              </h3>
              <p className="text-xs md:text-base font-extralight text-light-1">
                Have Written Research Papers on Topics like Geospatial
                Landslides and Healthcare
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl bg-dark-1  backdrop-blur-2xl opacity-85 mx-8 md:mx-0 px-4 py-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-900 p-0.5">
                <BsWindow className="h-10 w-10 text-cta" />
              </div>
              <h3 className="font-serif text-base md:text-xl font-semibold md:font-medium text-light-1">
                UI/UX Designs
              </h3>
              <p className="text-xs md:text-base font-extralight text-light-1">
                Designed Figma UI/UX for various sites using various design
                theories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
