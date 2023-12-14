import HealthOptima from '@/assets/HealthOptima.png';
import Circles from '@/assets/Circles.png';
import ChikitsaSalah from '@/assets/ChikitsaSalah.png';
import AnimeVault from '@/assets/AnimeVault.png';

export interface IProjectSectionCardData {
    id: number;
    imageUrl: any;
    icon?: string;
    title: string;
    techStack: string;
    href?: string;
  }
  
  export const projectCardData: IProjectSectionCardData[] = [
    
    {
      id: 1,
      title: 'Health Optima',
      techStack:
        'Next JS 13, Tailwind CSS, Typescript, ShadCN, NextAuth, Zod, React Hook Form, EmailJS, MongoDB, Figma',
      imageUrl: HealthOptima,
      href: 'https://github.com/dipesh2508/health-optima',
    },
    {
        id: 2,
        title: 'Circles',
        techStack: 'Next JS 13, Tailwind CSS, Typescript, ShadCN, Clerk, Zod, React Hook Form, MongoDB, UploadThing',
        imageUrl: Circles,
        href: 'https://github.com/dipesh2508/circles',
      },
    {
      id: 3,
      title: 'Chikitsa Salah',
      techStack:
        'Next JS 14, Tailwind CSS, Javascript, ShadCN, Swiper, Zod, Node Js, Express JS, MongoDB, PaLM 2 API, Cors',
      imageUrl: ChikitsaSalah,
      href: 'https://github.com/dipesh2508/Chikitsa-Salah',
    },
    {
      id: 4,
      title: 'Anime Vault',
      techStack: 'Next JS 14, Tailwind CSS, Typescript, Next Server Actions, Framer-Motion',
      imageUrl: AnimeVault,
      href: 'https://github.com/dipesh2508/anime_vault',
    },
  ];