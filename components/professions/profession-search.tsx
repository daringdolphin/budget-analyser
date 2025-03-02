"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ProfessionSearchProps {
  onProfessionSelect: (profession: string) => void;
}

export default function ProfessionSearch({ onProfessionSelect }: ProfessionSearchProps) {
  const [profession, setProfession] = useState("")
  const [placeholder, setPlaceholder] = useState("")
  const placeholderIndex = useRef(0)
  const charIndex = useRef(0)
  const isDeleting = useRef(false)
  const staticPrefix = "I am a "

  const placeholders = [
    "small business owner running a cafe",
    "insurance agent",
    "construction project manager",
    "marketing specialist in social media",
    "secondary school teacher",
    "freelance events planner",
    "nurse in emergency care",
    "personal fitness trainer",
    "delivery driver for a courier company",
    "data analyst in finance",
  ]

  useEffect(() => {
    const typingInterval = 20 // ms between characters
    const pauseInterval = 1000 // ms to pause at complete text

    const animatePlaceholder = () => {
      const currentText = placeholders[placeholderIndex.current]

      if (!isDeleting.current) {
        // Typing forward
        if (charIndex.current <= currentText.length) {
          setPlaceholder(currentText.substring(0, charIndex.current))
          charIndex.current += 1
          setTimeout(animatePlaceholder, typingInterval)
        } else {
          // Finished typing current text, pause before deleting
          isDeleting.current = true
          setTimeout(animatePlaceholder, pauseInterval)
        }
      } else {
        // Deleting
        if (charIndex.current > 0) {
          setPlaceholder("")
          charIndex.current = 0
          setTimeout(() => {
            isDeleting.current = false
            placeholderIndex.current = (placeholderIndex.current + 1) % placeholders.length
            setTimeout(animatePlaceholder, typingInterval)
          }, pauseInterval)
        } 
      }
    }

    animatePlaceholder()

    return () => {
      // Cleanup
      charIndex.current = 0
      isDeleting.current = false
    }
  }, [placeholders])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (profession.trim()) {
      onProfessionSelect(profession);
      setProfession(""); // Clear the input after submission
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <Input
            type="text"
            placeholder={`${staticPrefix}${placeholder}`}
            className="pl-10 h-12 text-lg"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
        </div>
        <Button type="submit" className="h-12 px-6 text-base font-medium" disabled={!profession.trim()}>
          What&apos;s in it for me?
        </Button>
      </form>
    </div>
  )
}

