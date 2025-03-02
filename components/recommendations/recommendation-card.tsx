import { LightbulbIcon } from "lucide-react"

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
  if (compact) {
    return (
      <div className="p-4 border rounded-lg bg-white">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <LightbulbIcon className="h-4 w-4 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg">{recommendation.opportunityTitle}</h3>
          </div>
        </div>
        <RecommendationActions actions={recommendation.actions} />
        <p className="text-sm">
          <span className="font-medium">Relevance:</span> {recommendation.relevance}
        </p>
        <p className="text-sm text-slate-500 mt-4 mb-4">
          <span className="font-medium">Budget Reference:</span> <i>{recommendation.budgetReference}</i>
        </p>
      </div>
    )
  }

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{recommendation.opportunityTitle}</h3>
      <p className="text-sm text-slate-500 mb-4">{recommendation.budgetReference}</p>
      <RecommendationActions actions={recommendation.actions} detailed />
      <div className="bg-slate-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Why This Matters:</h4>
        <p className="text-sm text-slate-700">{recommendation.relevance}</p>
      </div>
    </div>
  )
}

interface RecommendationActionsProps {
  actions: string[]
  detailed?: boolean
}

function RecommendationActions({ actions, detailed = false }: RecommendationActionsProps) {
  return (
    <div className="mb-3">
      <p className="font-medium text-sm mb-2">{detailed ? 'Recommended Actions:' : 'Actions:'}</p>
      <ul className="list-disc pl-5 space-y-1">
        {actions.map((action, actionIndex) => (
          <li key={actionIndex} className={`text-sm ${detailed ? 'text-slate-700' : ''}`}>
            {action}
          </li>
        ))}
      </ul>
    </div>
  )
} 