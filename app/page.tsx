import Hero from "@/components/hero"
import SocialProof from "@/components/social-proof"
import FeatureGrid from "@/components/feature-grid"
import HowItWorks from "@/components/how-it-works"
import SecondaryCta from "@/components/secondary-cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SocialProof />
      <FeatureGrid />
      <HowItWorks />
      <SecondaryCta />
      <Footer />
    </main>
  )
}
