// Import images for testimonials
import Ankit from "@/assets/Testimonials/ankit.jpg";
import Isheta from "@/assets/Testimonials/isheta.png";
import Kislay from "@/assets/Testimonials/kislay.png";
import Lavanya from "@/assets/Testimonials/lavanya.jpeg";
import Mayank from "@/assets/Testimonials/kislay.png";
import Ashutosh from "@/assets/Testimonials/kislay.png";
import Sarthak from "@/assets/Testimonials/sarthak.jpeg";

// Define the shape of the testimonial data
export interface ITestimonialData {
  avatar: any; // The avatar image of the person giving the testimonial
  name: string; // The name of the person giving the testimonial
  review: string; // The text of the testimonial
}

export const testimonialData: ITestimonialData[] = [
  {
    avatar: Ankit,
    name: "Ankit Panigrahi",
    review:
      "Always have told everyone that Dipesh is best at what he does, be it documentation(the perfectionist), immense knowledge in web dev, I'm really impressed with this eye catching portfolio website. I highly recommend working with him for punctual, sincere, and on-point fulfillment of your demands.",
  },
  {
    avatar: Isheta,
    name: "Isheta Aggarwal",
    review:
      "Dipesh is an incredibly talented and hardworking individual who performs consistently, making him an exceptional teammate in competitions. His unwavering commitment, dedication, and instrumental contributions are one of the key factors behind our continuous success.",
  },
  {
    avatar: Kislay,
    name: "Kislay Gupta",
    review:
      "Dipesh is my go-to guy whenever I need some sort of help in work related to website design, he understand my needs and fulfills them with absolute accuracy, due to his brilliance command on latest technologies used nowadays, making his skills are on par the industry level.",
  },
  {
    avatar: Lavanya,
    name: "Lavanya Saini",
    review:
      "Dipesh is an exceptional senior who possesses remarkable qualities. He is hardworking, passionate, and perpetually curious, with a genuine thirst for knowledge. Dipesh's skills are impressive, and he has consistently provided me with the right guidance. I'm grateful for his support and confident in his future success.",
  },
  {
    avatar: Mayank,
    name: "Mayank Raj",
    review:
      "Dipesh is one whom I know for the last decade as a friend, and as a skilled developer for about 5 years. We both have learnt most of the coding and dev skills together. He's very skilled in Web dev through React and is experienced in Python and C++. It has always been a great and fun learning experience with him.",
  },
  {
    avatar: Sarthak,
    name: "Sarthak Chauhan",
    review:
      "The attention to detail that dipesh puts up in his work is exceedingly second to none, in a brief spell where we have collaborated, he has been instrumental in aiding me with absolutely best quality of work and I truly appreciate the dedication and punctuality with which he does his work.",
  },
  {
    avatar: Ashutosh,
    name: "Ashutosh Kumar",
    review:
      "Dipesh's skills are so impressive, they should come with their own theme song! From his uncanny ability to juggle multiple tasks with ease to his knack for turning coffee into code, Dipesh is a true wizard of skillfulness. I'm convinced he has a secret superpower hidden up his sleeve.",
  },
];
