// Image Files Path: src/assets/
import HealthOptima from "@/assets/HealthOptima.png";
import Circles from "@/assets/Circles.png";
// import ChikitsaSalah from "@/assets/ChikitsaSalah.png";
// import AnimeVault from "@/assets/AnimeVault.png";
// import AnuvaadSangam from '@/assets/AnuvaadSangam.png';
import Projecify from '@/assets/Projecify.png'
import TheFirstAid from '@/assets/TheFirstAid.png'

// Interface for Data
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
    title: "Health Optima",
    techStack:
      "Next JS 14, Tailwind CSS, Typescript, ShadCN, NextAuth, Zod, MongoDB, Figma",
    imageUrl: HealthOptima,
    href: "https://healthoptima.in/",
  },
  {
    id: 2,
    title: "Circles",
    techStack:
      "Next JS 13, Tailwind CSS, Typescript, ShadCN, Clerk, Zod, MongoDB, UploadThing",
    imageUrl: Circles,
    href: "https://circles-tawny.vercel.app",
  },
  // {
  //   id: 3,
  //   title: "Chikitsa Salah",
  //   techStack:
  //     "Next JS 14, Tailwind CSS, Javascript, ShadCN, Swiper, Zod, Node Js, Express JS, MongoDB, PaLM 2 API, Cors",
  //   imageUrl: ChikitsaSalah,
  //   href: "https://github.com/dipesh2508/Chikitsa-Salah",
  // },
  // {
  //   id: 4,
  //   title: "Anime Vault",
  //   techStack:
  //     "Next JS 14, Tailwind CSS, Typescript, Next Server Actions, Framer-Motion",
  //   imageUrl: AnimeVault,
  //   href: "https://github.com/dipesh2508/anime_vault",
  // },
  // {
  //   id: 5,
  //   title: "Anuvaad Sangam",
  //   techStack:
  //     "Next JS 14, Tailwind CSS, Typescript, Shad CN, Clerk, Next Server Actions, Pusher JS, MongoDB, Google Translation API",
  //   imageUrl: AnuvaadSangam,
  //   href: "https://github.com/dipesh2508/anuvaad-sangam"
  // },
  {
    id: 6,
    title: "Projecify",
    techStack:
      "Next JS 14, Tailwind CSS, Typescript, Next-Auth, Zod, Next API, Prisma, PostgreSQL",
    imageUrl: Projecify,
    href: "https://projecify.tryntest.in"
  },
  {
    id: 7,
    title: "The First Aid",
    techStack:
      "Next JS 14, Tailwind CSS, Typescript, Clerk, Zod, Motion, Next Server Actions, MongoDB",
    imageUrl: TheFirstAid,
    href: "https://the-first-aid.vercel.app"
  }
];
