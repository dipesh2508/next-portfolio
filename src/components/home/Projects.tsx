// Import the projectCardData from the constants and the ProjectsCard component
import { projectCardData } from "@/constants/projects";
import ProjectsCard from "@/components/ui/projectCard";

// Define the Projects component
const Projects = () => {
  return (
    <section id="skills" className="h-auto p-8 md:px-24 md:py-8">
      <div className="flex flex-col items-center">
        <h1 className="font-serif text-2xl text-light-1 md:text-5xl ">
          What I&#39;ve Made
        </h1>
        <div className="mt-1 h-1.5 w-28 rounded-xl bg-secondary text-secondary md:mt-2 md:h-2.5 md:w-80"></div>
      </div>

      <div className="mx-8 mt-8 grid grid-cols-1 gap-4 md:mx-12 md:mt-12 md:grid-cols-4">
        {projectCardData.map((card) => (
          <ProjectsCard
          href={card.href} // The URL to the project
          key={card.id} // The unique identifier for the project
          title={card.title} // The title of the project
          src={card.imageUrl} // The image URL of the project
          techStack={card.techStack} // The technology stack used in the project
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;