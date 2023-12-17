import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Skills from '@/components/home/Skills'
import Projects from '@/components/home/Projects'
import Testimonials from '@/components/home/Testimonials'
import Navbar from '@/components/shared/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Testimonials />
    </>
  )
}
