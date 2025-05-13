import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Shield, Link, Database, Coffee } from "lucide-react"

const features = [
  {
    title: "Real-time data collection",
    description: "Pulls news, filings, social, podcasts the moment you click.",
    icon: Clock,
  },
  {
    title: "AI-verified summaries",
    description: "Language models cross-check sources to prevent hallucinations.",
    icon: Shield,
  },
  {
    title: "Linked citations",
    description: "Every point traced back to the original source.",
    icon: Link,
  },
  {
    title: "Secure infrastructure",
    description: "Supabase-hosted Postgres & storage, SOC 2 Type II compliant.",
    icon: Database,
  },
  {
    title: "Small-Talk generator",
    description: "Fast facts you can drop into conversation.",
    icon: Coffee,
  },
]

export default function FeatureGrid() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#0b0b16] via-[#161629] to-[#12121e] text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful features for better meetings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors rounded-2xl">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-purple-400 mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
