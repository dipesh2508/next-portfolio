import { cn } from "@/lib/utils";
import React from "react";

const SkillTab = ({ skill }: { skill: string }) => {
  return <div className={cn("py-2 px-2 md:px-3 bg-dark-1 m-0.5 md:m-1 grow rounded-lg font-sans text-xs md:text-sm text-light-1 font-thin",
  skill === 'Tailwind CSS' && 'border border-sky-500/60',
  skill === 'JavaScript' && 'border border-yellow-500/60',
  skill === 'React JS' && 'border border-blue-500/60',
  skill === 'Next JS' && 'border border-black/60',
  skill === 'Node JS' && 'border border-lime-500/60',
  skill === 'Express JS' && 'border border-gray-500/60',
  skill === 'MySql' && 'border border-blue-500/60',
  skill === 'MongoDB' && 'border border-green-500/60',
  skill === 'Docker' && 'border border-blue-500/60',
  skill === 'Git' && 'border border-orange-500/60',
  skill === 'Prisma' && 'border border-cyan-500/60',
  skill === 'GraphQL' && 'border border-pink-500/60',
  skill === 'TypeScript' && 'border border-blue-500/60',
  skill === 'Photoshop' && 'border border-blue-500/60',
  skill === 'Illustrator' && 'border border-amber-500/60',
  skill === 'Research' && 'border border-purple-500/60',
  )}>{skill}</div>;
};

export default SkillTab;
