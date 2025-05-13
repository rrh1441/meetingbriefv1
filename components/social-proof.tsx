"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "VP of Sales, TechCorp",
    quote: "MeetingBrief saved me hours of research before critical client meetings.",
    avatar: "/professional-woman-headshot.png",
  },
  {
    name: "Michael Chen",
    title: "Investment Analyst, Capital Partners",
    quote: "The depth of information is impressive. I'm always the most prepared person in the room.",
    avatar: "/professional-asian-man-headshot.png",
  },
  {
    name: "Aisha Patel",
    title: "Business Development, Innovate Inc",
    quote: "Small-Talk generator is a game-changer for breaking the ice in new meetings.",
    avatar: "/professional-indian-woman-headshot.png",
  },
  {
    name: "David Wilson",
    title: "Account Executive, Enterprise Solutions",
    quote: "The AI verification ensures I'm never caught off-guard with incorrect information.",
    avatar: "/professional-black-man-headshot.png",
  },
]

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by professionals</h2>

        <div className="relative">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className={`rounded-full object-cover transition-all duration-300 ${
                      hoveredIndex === activeIndex ? "grayscale-0" : "grayscale"
                    }`}
                    onMouseEnter={() => setHoveredIndex(activeIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                </div>
                <div>
                  <blockquote className="text-xl italic mb-4">"{testimonials[activeIndex].quote}"</blockquote>
                  <div className="font-semibold">{testimonials[activeIndex].name}</div>
                  <div className="text-gray-600">{testimonials[activeIndex].title}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-purple-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 rounded-full bg-white shadow-md"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 rounded-full bg-white shadow-md"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
