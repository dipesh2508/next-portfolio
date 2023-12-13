import { FaLaptopCode } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { BsWindow } from "react-icons/bs";
const About = () => {
  return (
    <section className="h-[90vh] bg-dark-2 p-28">
      <div className="flex flex-col items-center">
        <h1 className="font-serif text-5xl text-light-1 ">About Me</h1>
        <div className="mt-2 h-2.5 w-52 rounded-xl bg-cta text-cta"></div>
      </div>

      <div className="mt-12 grid grid-cols-4">
        <div className="col-span-1 mt-10 flex flex-col items-center">
          <div className="font-serif text-9xl text-light-1">1.5+</div>
          <div className="mt-4 flex flex-col items-center font-serif text-4xl font-semibold text-light-1">
            <div className="text-cta">Year</div> <div>Development</div>{" "}
            <div>Experience</div>
          </div>
        </div>

        <div className="col-span-3">
          <p className="font-sans text-lg font-light text-light-1">
            I am a Passion driven 3rd-year CSE student at Chandigarh University.
            Web development enthusiast, crafting dynamic apps with MERN, Next.js
            & Tailwind CSS. Keen eye for UI/UX, building user-centric
            experiences. curious about exploring new tech horizons. Committed,
            skilled, and ready to impact your team!
          </p>

          <div className="mt-12 flex flex-row gap-4">
            <div className="flex flex-col gap-2 rounded-xl bg-dark-1 px-4 py-6">
              <div  className="h-12 w-12 rounded-lg bg-teal-900 p-0.5 flex items-center justify-center">
                <FaLaptopCode  className="h-10 w-10 text-secondary"  />
              </div>
              <h3 className="font-serif text-xl font-medium text-light-1">
                Development Projects
              </h3>
              <p className="text-base font-extralight text-light-1">
                Developed 15+ projects with various domains like Web Dev and ML.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl bg-dark-1 px-4 py-6">
              <div className="h-12 w-12 rounded-lg bg-emerald-800 p-0.5">
                {" "}
                <HiAcademicCap className="h-11 w-11 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-light-1">
                Research Works
              </h3>
              <p className="text-base font-extralight text-light-1">
                Have Written Research Papers on Topics like Geospatial
                Landslides and Healthcare
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl bg-dark-1 px-4 py-6">
              <div className="h-12 w-12 rounded-lg bg-purple-900 p-0.5 flex items-center justify-center">
                <BsWindow className="h-10 w-10 text-cta" />
              </div>
              <h3 className="font-serif text-xl font-medium text-light-1">
                UI/UX Designs
              </h3>
              <p className="text-base font-extralight text-light-1">
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
