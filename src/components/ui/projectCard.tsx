// Import necessary components and hooks from react, next/link, and next/image
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

// Define the properties for the ProjectsCard component
interface ProjectsCardProps {
    title: string; // The title of the project
    src: any; // The source of the project's image
    href?: string; // The URL to the project (optional)
    techStack: string; // The technology stack used in the project
}

// Define the ProjectsCard component
const ProjectsCard: FC<ProjectsCardProps> = ({
  title,
  src,
  href,
  techStack,
}) => {
  return (
    // Render a Link component that opens in a new tab and navigates to the project's URL or the root URL if no URL is provided
    <Link target="_blank" href={href || "/"}>
      <div className="flex flex-col gap-3 overflow-hidden overflow-ellipsis rounded-2xl bg-dark-2 text-light-1 opacity-95">
        <Image
          src={src}
          alt={title}
          width={700}
          height={700}
          className="aspect-video object-cover"
        />
        <div className="flex h-32 flex-col gap-2 px-6 py-2 md:h-44">
          <div className="flex font-serif text-lg font-bold md:text-2xl">
            {title}
          </div>
          <div className="text-info flex text-xs font-extralight md:text-base">
            {techStack}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
