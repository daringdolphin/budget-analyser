'use client';

import { useState, useEffect } from "react"
import { Suspense } from "react"
import Header from "@/components/ui/header"
import ProfessionSearch from "@/components/professions/profession-search"
import ProfessionGrid from "@/components/professions/profession-grid"
import Navigation from "@/components/ui/navigation"
import Footer from "@/components/ui/footer"
import { Button } from "@/components/ui/button"
import { type Recommendation } from "@/lib/recommendations"
import RecommendationsModal from "@/components/recommendations/recommendations-modal";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import PastRecommendations from "@/components/recommendations/past-recommendations"

function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Loader2 className="h-6 w-6 animate-spin text-primary" />
    </div>
  )
}

export default function Home() {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [selectedPastIndex, setSelectedPastIndex] = useState<number | null>(null);
  const [pastRecommendations, setPastRecommendations] = useState<Array<{
    profession: string;
    recommendations: Recommendation[];
    timestamp: number;
    id: string;
  }>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastFetchedProfession, setLastFetchedProfession] = useState<string | null>(null);

  // Load past recommendations from localStorage on initial page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clear localStorage on page load to give users a fresh start
      localStorage.clear();
      // Reset all state related to past recommendations
      setPastRecommendations([]);
      setSelectedPastIndex(null);
    }
  }, []);

  // Save past recommendations to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined' && pastRecommendations.length > 0) {
      localStorage.setItem('pastRecommendations', JSON.stringify(pastRecommendations));
    }
  }, [pastRecommendations]);

  const handleProfessionSelect = (selectedProfession: string) => {
    // regex check to strip "I am a/an" and handle other common prefixes, normalize case
    const profession = selectedProfession
      .toLowerCase()
      .replace(/^i am (a|an) /i, '')
      .replace(/^i('m| am) (a|an) /i, '')
      .replace(/^(a|an) /i, '')
      .trim()
      // Capitalize first letter
      .replace(/^[a-z]/, c => c.toUpperCase());
    
    // Check if we're already fetching or have fetched for the same profession
    if (loading || profession === lastFetchedProfession) {
      return;
    }
    
    // Set lastFetchedProfession to prevent duplicate fetches
    setLastFetchedProfession(profession);
    console.log('profession', profession);
    // When fetching recommendations, we need the full format
    fetchRecommendations(`I am a ${profession.toLowerCase()}`, profession);
  };

  const fetchRecommendations = async (searchQuery: string, profession: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/get-recommendation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: searchQuery }),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      const jsonRegex = /```json\n(\[\s*\{[\s\S]*?\}\s*\])\s*```/;
      const match = jsonRegex.exec(data.response);
      const jsonData = match ? JSON.parse(match[1]) : null;
      
      // Store in past recommendations
      if (jsonData) {
        // Create a unique ID for this recommendation set
        const recommendationId = `${profession.toLowerCase()}-${Date.now()}`;
        
        const newPastRecommendation = {
          profession,
          recommendations: jsonData,
          timestamp: Date.now(),
          id: recommendationId
        };
        
        // Check if we already have a recommendation for this profession
        const existingIndex = pastRecommendations.findIndex(
          pr => pr.profession.toLowerCase() === profession.toLowerCase()
        );
        
        let updatedPastRecommendations;
        if (existingIndex >= 0) {
          // Update the existing recommendation
          updatedPastRecommendations = [...pastRecommendations];
          updatedPastRecommendations[existingIndex] = newPastRecommendation;
          
          // If the recommendation we're updating is not selected, select it
          if (selectedPastIndex !== existingIndex) {
            setSelectedPastIndex(existingIndex);
          }
        } else {
          // Add new recommendation to the beginning of the array
          updatedPastRecommendations = [
            newPastRecommendation,
            ...pastRecommendations.slice(0, 4)
          ];
          // Select the new recommendation (always at index 0)
          setSelectedPastIndex(0);
        }
        
        setPastRecommendations(updatedPastRecommendations);
        setShowRecommendations(true);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching recommendations:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePastRecommendationSelect = (index: number) => {
    console.log('Selected past recommendation index:', index);
    
    if (selectedPastIndex === index) {
      // If it's already selected, just make sure modal is open
      setShowRecommendations(true);
    } else {
      // Select the new past recommendation by index
      setSelectedPastIndex(index);
      setShowRecommendations(true);
    }
  };

  const handleRemovePastRecommendation = (index: number) => {
    // If the recommendation we're removing is currently selected, close the modal
    if (selectedPastIndex === index) {
      setShowRecommendations(false);
      setSelectedPastIndex(null);
    } else if (selectedPastIndex !== null && selectedPastIndex > index) {
      // If we're removing an item before the selected one, adjust the index
      setSelectedPastIndex(selectedPastIndex - 1);
    }
    
    const updatedPastRecommendations = pastRecommendations.filter((_, i) => i !== index);
    setPastRecommendations(updatedPastRecommendations);
  };

  const handleRetry = () => {
    if (lastFetchedProfession) {
      fetchRecommendations(`I am a ${lastFetchedProfession.toLowerCase()}`, lastFetchedProfession);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Header />
        <div className="max-w-4xl mx-auto mt-12">
          <ProfessionSearch onProfessionSelect={handleProfessionSelect} />
          
          {/* Show past recommendations */}
          {pastRecommendations.length > 0 && !loading && !error && (
            <PastRecommendations
              items={pastRecommendations}
              onSelect={handlePastRecommendationSelect}
              onRemove={handleRemovePastRecommendation}
              selectedIndex={selectedPastIndex}
            />
          )}
          
          {/* Loading State */}
          {loading && (
            <div className="mt-8 text-center">
              <LoadingSpinner />
              <p className="mt-2 text-sm text-muted-foreground">
                Generating recommendations...
              </p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <Alert variant="destructive" className="mt-8">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription className="flex flex-col gap-2">
                <p>{error}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleRetry}
                  className="w-fit"
                >
                  Try Again
                </Button>
              </AlertDescription>
            </Alert>
          )}

          <div className="mt-16">
            <h2 className="text-xl font-semibold text-center mb-8 text-slate-600">Or select a profile below</h2>
            <Suspense fallback={
              <div className="h-64 flex items-center justify-center">
                <LoadingSpinner />
                <span className="ml-2">Loading profiles...</span>
              </div>
            }>
              <ProfessionGrid onProfessionSelect={handleProfessionSelect} />
            </Suspense>
          </div>
        </div>
      </main>
      {selectedPastIndex !== null && pastRecommendations.length > 0 && (
        <RecommendationsModal 
          profession={pastRecommendations[selectedPastIndex].profession}
          recommendations={pastRecommendations[selectedPastIndex].recommendations}
          onClose={() => {
            setShowRecommendations(false);
            setSelectedPastIndex(null);
          }}
          open={showRecommendations}
          recommendationId={`recommendation-${selectedPastIndex}`}
        />
      )}
      <Footer />
    </div>
  )
}

