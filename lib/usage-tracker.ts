// Helper functions to track anonymous usage in localStorage

export function getUsageCount(): number {
  if (typeof window === "undefined") return 0

  const count = localStorage.getItem("meetingBriefUsageCount")
  return count ? Number.parseInt(count, 10) : 0
}

export function incrementUsageCount(): void {
  if (typeof window === "undefined") return

  const currentCount = getUsageCount()
  localStorage.setItem("meetingBriefUsageCount", (currentCount + 1).toString())
}

export function resetUsageCount(): void {
  if (typeof window === "undefined") return

  localStorage.setItem("meetingBriefUsageCount", "0")
}
