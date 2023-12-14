import { projectCardData } from "@/constants/projects"
import ProjectsCard from "@/components/ui/projectCard"

const Projects= () => {
  return (
    <section id="skills" className="h-auto p-8 md:px-24 md:py-8">
    <div className="flex flex-col items-center">
      <h1 className="font-serif text-2xl text-light-1 md:text-5xl ">
        What I&#39;ve Made
      </h1>
      <div className="mt-1 h-1.5 w-28 rounded-xl bg-secondary text-secondary md:mt-2 md:h-2.5 md:w-80"></div>
    </div>

    <div className="mt-8 grid grid-cols-1 md:mt-12 md:grid-cols-4 gap-4 mx-8 md:mx-12">
    {projectCardData.map((card) => (
          <ProjectsCard
            href={card.href}
            key={card.id}
            title={card.title}
            src={card.imageUrl}
            techStack={card.techStack}
          />
        ))}
        </div>

    </section>
  )
}

export default Projects