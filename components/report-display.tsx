"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Copy, ExternalLink } from "lucide-react"
import SignUpModal from "./sign-up-modal"

interface ReportProps {
  report: {
    name: string
    company: string
    summary: string
    background: string
    recentNews: string[]
    socialActivity: string[]
  }
}

export default function ReportDisplay({ report }: ReportProps) {
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const isSignedIn = false // TODO: Replace with actual auth check

  const handleCopyOrDownload = () => {
    if (!isSignedIn) {
      setShowSignUpModal(true)
    } else {
      // Implement actual copy or download functionality
      console.log("Copy or download functionality")
    }
  }

  return (
    <>
      <Card className="w-full max-w-4xl bg-white/5 border-white/10 text-left">
        <CardHeader className="border-b border-white/10">
          <CardTitle className="text-2xl flex items-center justify-between">
            <span>
              MeetingBrief: {report.name} ({report.company})
            </span>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="text-gray-300 border-gray-600"
                onClick={handleCopyOrDownload}
                disabled={!isSignedIn}
              >
                <Copy className="h-4 w-4 mr-2" />
                {isSignedIn ? "Copy" : "Sign up to copy"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-gray-300 border-gray-600"
                onClick={handleCopyOrDownload}
                disabled={!isSignedIn}
              >
                <Download className="h-4 w-4 mr-2" />
                {isSignedIn ? "Download" : "Sign up to download"}
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-400">Executive Summary</h3>
            <p className="text-gray-300">{report.summary}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-400">Background</h3>
            <p className="text-gray-300">{report.background}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-400">Recent News</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              {report.recentNews.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span>{item}</span>
                  <ExternalLink className="h-4 w-4 ml-1 inline-block text-gray-400 flex-shrink-0" />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-purple-400">Social Activity</h3>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              {report.socialActivity.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span>{item}</span>
                  <ExternalLink className="h-4 w-4 ml-1 inline-block text-gray-400 flex-shrink-0" />
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <SignUpModal open={showSignUpModal} onOpenChange={setShowSignUpModal} />
    </>
  )
}
