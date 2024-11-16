// Import necessary utilities from project's utils
import { cn } from "@/lib/utils";
import { MotionDiv } from "@/components/animations/motionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


// Define the SkillTab component
const SkillTab = ({ skill, number }: { skill: string, number: number }) => {
  return (
    // Render a div with a dynamic class name based on the skill
    // The class name includes a border color specific to the skill
    <MotionDiv
    variants={variants}
    initial="hidden"
    transition={{
      delay: number * 0.2,
      ease: "easeInOut",
      duration: 0.2,
    }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
      className={cn(
        // Common classes for all skills
        "m-0.5 grow rounded-lg bg-dark-1 px-2 py-2 font-sans text-xs font-thin text-light-1 md:m-1 md:px-3 md:text-sm",
        // Add a specific border color based on the skill
        skill === "Tailwind CSS" && "border border-sky-500/60",
        skill === "JavaScript" && "border border-yellow-500/60",
        skill === "React JS" && "border border-blue-500/60",
        skill === "Next JS" && "border border-black/60",
        skill === "Node JS" && "border border-lime-500/60",
        skill === "Express JS" && "border border-gray-500/60",
        skill === "MySql" && "border border-blue-500/60",
        skill === "MongoDB" && "border border-green-500/60",
        skill === "Docker" && "border border-blue-500/60",
        skill === "Git" && "border border-orange-500/60",
        skill === "Prisma" && "border border-cyan-500/60",
        skill === "GraphQL" && "border border-pink-500/60",
        skill === "TypeScript" && "border border-blue-500/60",
        skill === "Photoshop" && "border border-blue-500/60",
        skill === "Illustrator" && "border border-amber-500/60",
        skill === "Research" && "border border-purple-500/60",
      )}
    >
      {/* Render the skill name */}
      {skill}
    </MotionDiv>
  );
};

export default SkillTab;
