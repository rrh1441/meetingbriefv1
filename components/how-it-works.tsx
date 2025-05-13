import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    number: 1,
    title: "Input",
    description: "Enter a name & company; click Generate Brief.",
  },
  {
    number: 2,
    title: "Live data collection",
    description: "MeetingBrief gathers public records, news, and social content in real time.",
  },
  {
    number: 3,
    title: "AI distillation & verification",
    description: "The engine filters noise, checks consistency, and produces a concise, source-linked report.",
  },
  {
    number: 4,
    title: "Arrive prepared",
    description: "Read the report (plus optional Small-Talk); copy or download once signed in.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="border-none shadow-md rounded-2xl">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <CardTitle>
                  Step {step.number} – {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
