import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Lightbulb, X } from "lucide-react";
import { type Recommendation } from "@/lib/recommendations";
import { useEffect, useState } from "react";

interface PastRecommendation {
  profession: string;
  recommendations: Recommendation[];
  timestamp: number;  // Keep for unique key purposes
  id: string;  // Add unique ID for referential integrity
}

interface PastRecommendationsProps {
  items: PastRecommendation[];
  onSelect: (index: number) => void;  // Changed to accept index
  onRemove: (index: number) => void;  // Changed to accept index
  selectedIndex: number | null;  // Changed from selectedTimestamp
}

export default function PastRecommendations({ 
  items,
  onSelect,
  onRemove,
  selectedIndex
}: PastRecommendationsProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (items.length === 0) return null;
  if (!isMounted) return null;

  return (
    <ScrollArea className="w-full whitespace-nowrap mt-4">
      <div className="flex space-x-2 pb-2">
        {/* All recommendations are displayed as pills */}
        {items.map((item, index) => (
          <button 
            key={item.timestamp}
            onClick={() => onSelect(index)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors cursor-pointer group ${
              selectedIndex === index 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-primary/10 hover:bg-primary/20 text-primary'
            }`}
          >
            <Lightbulb className="h-4 w-4" />
            <span>{item.profession}</span>
            <X 
              className={`h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity ml-1 ${
                selectedIndex === index ? 'text-primary-foreground' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onRemove(index);
              }}
            />
          </button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
} 