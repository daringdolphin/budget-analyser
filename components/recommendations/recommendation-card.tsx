import { LightbulbIcon } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface RecommendationCardProps {
  recommendation: {
    opportunityTitle: string
    budgetReference: string
    actions: string[]
    relevance: string
  }
  compact?: boolean
}

export function RecommendationCard({ recommendation, compact = false }: RecommendationCardProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border border-slate-200 rounded-lg bg-white shadow-sm hover:shadow transition-shadow duration-200">
        <AccordionTrigger className="py-5 px-6">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shadow-inner">
              <LightbulbIcon className="h-5 w-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg text-slate-800">{recommendation.opportunityTitle}</h3>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-2">
          <div className="py-4 px-4">
            <RecommendationActions actions={recommendation.actions} detailed />
            <div className="bg-slate-50 p-5 rounded-lg mt-5 border border-slate-100 shadow-inner">
              <h4 className="font-medium mb-3 text-slate-800">Why This Matters:</h4>
              <p className="text-sm leading-relaxed text-slate-700">{recommendation.relevance}</p>
            </div>
            <p className="text-sm text-slate-500 mt-5 pt-3 border-t border-slate-100">
              <span className="font-medium">Budget Reference:</span> <i>{recommendation.budgetReference}</i>
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

interface RecommendationActionsProps {
  actions: string[]
  detailed?: boolean
}

function RecommendationActions({ actions, detailed = false }: RecommendationActionsProps) {
  return (
    <div className="mb-5">
      <p className="font-medium text-sm mb-3 text-slate-800">{detailed ? 'Recommended Actions:' : 'Actions:'}</p>
      <ul className="list-disc pl-6 space-y-2.5">
        {actions.map((action, actionIndex) => (
          <li key={actionIndex} className={`text-sm leading-relaxed ${detailed ? 'text-slate-700' : ''}`}>
            {action}
          </li>
        ))}
      </ul>
    </div>
  )
} 