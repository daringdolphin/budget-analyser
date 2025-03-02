"use client"

import { useState } from "react"
import { Briefcase, GraduationCap, Code, LineChart, ShoppingBag, BookOpen, Calculator, Store } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const professions = [
  { id: 1, name: "Teacher", icon: BookOpen },
  { id: 2, name: "Software Engineer", icon: Code },
  { id: 3, name: "Sales Executive", icon: LineChart },
  { id: 4, name: "Biz Dev Manager", icon: Briefcase },
  { id: 5, name: "Hawker", icon: Store },
  { id: 6, name: "Student", icon: GraduationCap },
  { id: 7, name: "Accountant", icon: Calculator },
  { id: 8, name: "Retail Sales Associate", icon: ShoppingBag },
]

interface ProfessionGridProps {
  onProfessionSelect: (profession: string) => void;
}

export default function ProfessionGrid({ onProfessionSelect }: ProfessionGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {professions.map((profession) => {
        const Icon = profession.icon
        return (
          <Card
            key={profession.id}
            className="cursor-pointer transition-all hover:shadow-md hover:-translate-y-1 w-full aspect-square"
            onClick={() => onProfessionSelect(profession.name)}
          >
            <CardContent className="flex flex-col items-center justify-center p-6 h-full">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                <Icon className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="font-medium text-center">{profession.name}</h3>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

