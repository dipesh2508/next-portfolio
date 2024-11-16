// Import necessary icons from react-icons
import { FaLaptopCode } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { BsWindow } from "react-icons/bs";

interface AboutCard {
    icon: React.ElementType;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    delay: number;
}

export const aboutCards: AboutCard[] = [
    {
      icon: FaLaptopCode,
      iconBg: "bg-teal-900",
      iconColor: "text-secondary",
      title: "Development Projects",
      description: "Developed 15+ projects with various domains like Web Dev and ML.",
      delay: 0.3,
    },
    {
      icon: HiAcademicCap,
      iconBg: "bg-emerald-800",
      iconColor: "text-primary",
      title: "Research Works",
      description: "Have Written Research Papers on Topics like Geospatial Landslides and Healthcare",
      delay: 0.6,
    },
    {
      icon: BsWindow,
      iconBg: "bg-purple-900",
      iconColor: "text-cta",
      title: "UI/UX Designs",
      description: "Designed UI/UX Files for various sites using various design theories and Figma.",
      delay: 0.9,
    },
  ];