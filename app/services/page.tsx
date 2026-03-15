import ServicesHero from "@/components/ServicesHero"
import ServicesGrid from "@/components/ServicesGrid"
import ContactCTA from "@/components/ContactCTA"
import MobileBottomNav from "@/components/MobileBottomNav"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function ServicesPage() {
  return (
    <main >
      <Navbar/>
      <ServicesHero />
      <ServicesGrid />
      <ContactCTA />
      <MobileBottomNav />
      <Footer />
    </main>
  )
}