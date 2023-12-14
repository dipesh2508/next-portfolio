import SkillTab from "@/components/ui/skillTab";

import {
  frontEndData,
  backEndData,
  designData,
  otherData,
} from "@/constants/skills";

const Skills = () => {
  return (
    <section id="skills" className="h-auto p-8 md:px-24 md:py-16">
      <div className="flex flex-col items-center">
        <h1 className="font-serif text-2xl text-light-1 md:text-5xl ">
          What I know
        </h1>
        <div className="mt-1 h-1.5 w-28 rounded-xl bg-primary text-primary md:mt-2 md:h-2.5 md:w-52"></div>
      </div>
      <div className="mx-8 mt-8 grid grid-cols-1 gap-4 md:mx-12 md:mt-12 md:grid-cols-4">
        {/* FrontEnd Skills */}
        <div className="col-span-1 flex flex-col justify-center rounded-xl bg-dark-2 p-4 text-center font-serif opacity-95">
          <h3 className="top-0 my-4 text-lg font-semibold text-light-1 md:text-xl">
            FrontEnd Skills
          </h3>
          <div className="flex flex-wrap gap-1">
            {frontEndData.map((index, key) => (
              <SkillTab key={key} skill={index} />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="col-span-1 flex flex-col justify-center rounded-xl bg-dark-2 p-4 text-center font-serif opacity-95">
          <h3 className="top-0 my-4 text-lg font-semibold text-light-1 md:text-xl">
            BackEnd Skills
          </h3>
          <div className="flex flex-wrap gap-1">
            {backEndData.map((index, key) => (
              <SkillTab key={key} skill={index} />
            ))}
          </div>
        </div>

        {/* Design Skills */}
        <div className="col-span-1 flex flex-col justify-center rounded-xl bg-dark-2 p-4 text-center font-serif opacity-95">
          <h3 className="top-0 my-4 text-lg font-semibold text-light-1 md:text-xl">
            Design Skills
          </h3>
          <div className="flex flex-wrap gap-1">
            {designData.map((index, key) => (
              <SkillTab key={key} skill={index} />
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="col-span-1 flex flex-col justify-center rounded-xl bg-dark-2 p-4 text-center font-serif opacity-95">
          <h3 className="my-4 text-lg font-semibold text-light-1 md:text-xl">
            Other Skills
          </h3>
          <div className="flex flex-wrap gap-1">
            {otherData.map((index, key) => (
              <SkillTab key={key} skill={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
