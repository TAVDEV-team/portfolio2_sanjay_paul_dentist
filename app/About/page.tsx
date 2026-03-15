import Navbar from "@/components/Navbar"
import AboutHero from "@/components/AboutHero"
import Biography from "@/components/Biography"
import CoreValues from "@/components/CoreValues"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Biography />
      <CoreValues />
      <CTA />
      <Footer />
    </>
  )
}