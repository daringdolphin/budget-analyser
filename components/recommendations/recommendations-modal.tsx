"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import RecommendationsPage from "@/components/recommendations/recommendations-page"
import { RecommendationCard } from "@/components/recommendations/recommendation-card"

interface RecommendationsModalProps {
  profession: string
  onClose: () => void
  recommendations: Recommendation[]
  open: boolean
}

interface Recommendation {
  opportunityTitle: string
  budgetReference: string
  actions: string[]
  relevance: string
}

interface ModalHeaderProps {
  title: string
}

function ModalHeader({ title }: ModalHeaderProps) {
  return (
    <SheetHeader className="mb-6">
      <div className="flex items-center justify-between">
        <SheetTitle className="text-2xl font-bold">{title}</SheetTitle>
        <SheetClose className="rounded-full p-2 hover:bg-slate-100">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </div>
    </SheetHeader>
  )
}

function ModalFooter({ total, shown, onViewAll }: { total: number; shown: number; onViewAll: () => void }) {
  return (
    <div className="mt-6 text-center">
      <p className="text-sm text-slate-500 mb-4">
        Showing {shown} of {total} recommendations
      </p>
      <Button onClick={onViewAll}>View All Recommendations</Button>
    </div>
  )
}

export default function RecommendationsModal({ profession, onClose, recommendations, open }: RecommendationsModalProps) {
  const [showFullPage, setShowFullPage] = useState(false)
  const previewRecommendations = recommendations.slice(0, 3)

  if (showFullPage) {
    return (
      <RecommendationsPage
        profession={profession}
        recommendations={recommendations}
        onBack={() => setShowFullPage(false)}
      />
    )
  }

  return (
    <Sheet open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent className="w-full sm:max-w-[80%] overflow-y-auto">
        <ModalHeader title={`Top Recommendations for ${profession}`} />

        <div className="space-y-6">
          {previewRecommendations.map((rec, index) => (
            <RecommendationCard key={index} recommendation={rec} compact />
          ))}
        </div>

        <ModalFooter
          total={recommendations.length}
          shown={previewRecommendations.length}
          onViewAll={() => setShowFullPage(true)}
        />
      </SheetContent>
    </Sheet>
  )
}

