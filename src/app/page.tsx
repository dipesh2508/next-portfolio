import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Contact from "@/components/home/Contact";
import ScrollProgress from "@/components/animations/ScrollProgress";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
