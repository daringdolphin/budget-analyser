"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { RecommendationCard } from "@/components/recommendations/recommendation-card"

interface RecommendationsModalProps {
  profession: string
  onClose: () => void
  recommendations: Recommendation[]
  open: boolean
  recommendationId?: string
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
        <div>
          <SheetTitle className="text-2xl font-bold">{title}</SheetTitle>
        </div>
        <SheetClose className="rounded-full p-2 hover:bg-slate-100">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </div>
    </SheetHeader>
  )
}

function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: { 
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void 
}) {
  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(page)}
            className="w-8 h-8"
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default function RecommendationsModal({ 
  profession, 
  onClose, 
  recommendations, 
  open, 
  recommendationId
}: RecommendationsModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(recommendations.length / itemsPerPage)
  
  // Generate a unique key for this modal instance that changes when the profession or recommendations change
  // Include the recommendationId if available for guaranteed uniqueness
  const modalKey = recommendationId || `${profession}-${recommendations?.[0]?.opportunityTitle ?? ''}-${Date.now()}`

  useEffect(() => {
    if (open && recommendations.length > 0) {
      setIsOpen(true)
      setCurrentPage(1) // Reset to first page when opening
    } else {
      setIsOpen(false)
    }
  }, [open, recommendations, profession])

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return recommendations.slice(startIndex, endIndex)
  }

  return (
    <Sheet 
      key={modalKey}
      open={isOpen} 
      onOpenChange={(open) => {
        setIsOpen(open)
        if (!open) onClose()
      }}
    >
      <SheetContent side="right" className="w-full sm:max-w-[80%] overflow-y-auto [&>button]:hidden">
        <ModalHeader 
          title={`Top Recommendations for ${profession}`}
        />

        <div className="space-y-2">
          {getCurrentPageItems().map((rec, index) => (
            <RecommendationCard key={`${rec.opportunityTitle}-${index}`} recommendation={rec} />
          ))}
        </div>

        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <div className="mt-4 text-center">
          <p className="text-sm text-slate-500">
            Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, recommendations.length)} of {recommendations.length} recommendations
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

