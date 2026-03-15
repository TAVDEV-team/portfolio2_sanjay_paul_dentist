import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Footer from "@/components/Footer"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <About />
      <Testimonials/>
      <Contact/>
      <Footer />
    </>
  )
}