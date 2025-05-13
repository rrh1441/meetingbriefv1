"use client"

import { Button } from "@/components/ui/button"

export default function SecondaryCta() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-16 px-4 bg-purple-600 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">Run your first brief in &lt; 60 sec</h2>
        <Button size="lg" onClick={scrollToTop} className="bg-white text-purple-600 hover:bg-gray-100 rounded-2xl">
          Generate now
        </Button>
      </div>
    </section>
  )
}
