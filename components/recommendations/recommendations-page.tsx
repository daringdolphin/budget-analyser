"use client"

import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RecommendationCard } from "@/components/recommendations/recommendation-card"

interface RecommendationsPageProps {
  profession: string
  recommendations: Array<{
    opportunityTitle: string
    budgetReference: string
    actions: string[]
    relevance: string
  }>
  onBack: () => void
}

function PageHeader({ profession, onBack }: { profession: string; onBack: () => void }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Budget Recommendations for {profession}</h1>
      <Button variant="outline" onClick={onBack}>Back</Button>
    </div>
  )
}

function PageFooter({ onBack }: { onBack: () => void }) {
  return (
    <div className="mt-12 p-6 border rounded-lg bg-slate-50">
      <h3 className="font-semibold text-lg mb-4">Need More Information?</h3>
      <div className="flex flex-wrap gap-4">
        <Button variant="outline" className="flex items-center">
          Explore More Budget Initiatives
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="secondary" onClick={onBack}>
          Back to Profession Selection
        </Button>
      </div>
    </div>
  )
}

export default function RecommendationsPage({ profession, recommendations, onBack }: RecommendationsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <PageHeader profession={profession} onBack={onBack} />

          <div className="grid gap-6">
            {recommendations.map((rec, index) => (
              <RecommendationCard key={index} recommendation={rec} />
            ))}
          </div>

          <PageFooter onBack={onBack} />
        </div>
      </div>
    </div>
  )
}

