import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// images



interface ProjectsCardProps {
  title: string;
  src: any;
  href?: string;
  techStack: string;
}

const ProjectsCard: FC<ProjectsCardProps> = ({
  title,
  src,
  href,
  techStack,
}) => {
  return (
    <Link target="_blank" href={href || '/'}>
      <div className="flex flex-col overflow-hidden opacity-95 gap-3 bg-dark-2 text-light-1 rounded-2xl overflow-ellipsis">
        <Image
          src={src}
          alt={title}
          width={700}
          height={700}
          className="aspect-video object-cover"
        />
        <div className="flex flex-col gap-2 px-6 py-2 h-32 md:h-44">
          <div className="flex font-serif text-lg md:text-2xl font-bold">{title}</div>
          <div className="flex text-info text-xs md:text-base font-extralight">{techStack}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;