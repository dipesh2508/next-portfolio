import SkillTab from "@/components/ui/skillTab";

import {
  frontEndData,
  backEndData,
  designData,
  otherData,
} from "@/constants/skills";

const Skills = () => {
  return (
    <section className="h-auto p-8 md:p-24">
      <div className="flex flex-col items-center">
        <h1 className="font-serif text-2xl text-light-1 md:text-5xl ">
          What I know
        </h1>
        <div className="mt-1 h-1.5 w-28 rounded-xl bg-primary text-primary md:mt-2 md:h-2.5 md:w-52"></div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:mt-12 md:grid-cols-4 gap-4 mx-12">
        <div className="col-span-1 rounded-xl flex flex-col font-serif justify-center text-center p-4 bg-dark-2 opacity-95">
          <h3 className="top-0 my-4 text-xl font-semibold text-light-1">FrontEnd Skills</h3>
          <div className="flex gap-1 flex-wrap">
            {frontEndData.map((index, key) => (
              <SkillTab key={key} skill={index} />
            ))}
          </div>
        </div>

        <div className="col-span-1 rounded-xl flex flex-col font-serif justify-center text-center p-4 opacity-95 bg-dark-2">
          <h3 className="top-0 my-4 text-xl font-semibold text-light-1">BackEnd Skills</h3>
          <div className="flex flex-wrap gap-1">
            {backEndData.map((index, key) => (
              <SkillTab key={key} skill={index} />
            ))}
          </div>
        </div>

        <div className="col-span-1 rounded-xl flex flex-col font-serif justify-center text-center p-4 bg-dark-2 opacity-95">
          <h3 className="top-0 my-4 text-xl font-semibold text-light-1">Design Skills</h3>
          <div className="flex gap-1 flex-wrap">
            {designData.map((index, key) => (
              <SkillTab key={key} skill={index} />
            ))}
          </div>
        </div>

        <div className="col-span-1 rounded-xl flex flex-col font-serif justify-center text-center p-4 bg-dark-2 opacity-95">
          <h3 className="my-4 text-xl font-semibold text-light-1">Other Skills</h3>
          <div className="flex gap-1 flex-wrap">
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
