"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LoadingState from "./loading-state"
import ReportDisplay from "./report-display"
import SignUpModal from "./sign-up-modal"
import { incrementUsageCount, getUsageCount } from "@/lib/usage-tracker"

export default function Hero() {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [reportData, setReportData] = useState<any>(null)
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check if user has reached the limit
    const currentCount = getUsageCount()
    if (currentCount >= 3) {
      setShowSignUpModal(true)
      return
    }

    setIsLoading(true)
    setReportData(null)

    // Simulate API call with setTimeout
    setTimeout(() => {
      // TODO: Replace with actual API call
      const mockReport = {
        name,
        company,
        summary: `${name} is the CEO of ${company}, a leading technology company in the software industry.`,
        background: `${name} has been with ${company} for 5 years and has led several successful initiatives.`,
        recentNews: [
          `${company} recently announced a new product line.`,
          `${company} stock has increased by 15% in the last quarter.`,
          `${name} was featured in a recent industry publication.`,
        ],
        socialActivity: [
          `${name} recently shared insights about industry trends on LinkedIn.`,
          `${company} has been actively promoting their sustainability initiatives.`,
        ],
      }

      setReportData(mockReport)
      setIsLoading(false)
      incrementUsageCount()
    }, 3000)
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b0b16] via-[#161629] to-[#12121e] text-white px-4 py-16">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Know everything before you enter the room.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">Arrive informed — deep research made effortless.</p>

            {!isLoading && !reportData && (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-left block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Smith"
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-left block">
                      Company
                    </Label>
                    <Input
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Inc."
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                  Generate Brief
                </Button>
              </form>
            )}
          </div>

          {isLoading && <LoadingState />}
          {reportData && <ReportDisplay report={reportData} />}
        </div>
      </section>

      <SignUpModal open={showSignUpModal} onOpenChange={setShowSignUpModal} />
    </>
  )
}
