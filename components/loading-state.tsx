"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoadingState() {
  const [smallTalkTopics] = useState([
    "The average person will spend six months of their life waiting at red lights.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat.",
    "A day on Venus is longer than a year on Venus. It takes 243 Earth days to rotate once on its axis, but only 225 Earth days to go around the sun.",
    "The world's oldest known living tree is over 5,000 years old.",
    "Octopuses have three hearts, nine brains, and blue blood.",
  ])

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      <p className="text-gray-300">Generating your MeetingBrief...</p>

      <Card className="w-full max-w-2xl bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Small-Talk Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {smallTalkTopics.slice(0, 3).map((topic, index) => (
              <li key={index} className="text-gray-300">
                • {topic}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
