'use client';

import { useState, useEffect } from "react"
import { Suspense } from "react"
import Header from "@/components/header"
import ProfessionSearch from "@/components/professions/profession-search"
import ProfessionGrid from "@/components/professions/profession-grid"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { type Recommendation } from "@/lib/recommendations"
import RecommendationsModal from "@/components/recommendations/recommendations-modal";

export default function Home() {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [profession, setProfession] = useState<string | null>(() => {
    // Only run this code on the client side
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedProfession');
    }
    return null;
  });
  const [recommendations, setRecommendations] = useState<Recommendation[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load saved profession and fetch recommendations if it exists
    const savedProfession = localStorage.getItem('selectedProfession');
    if (savedProfession && !profession) {
      setProfession(savedProfession);
      fetchRecommendations(savedProfession);
    }
  }, []);

  const handleProfessionSelect = (selectedProfession: string) => {
    // regex check to strip "I am a" from the profession
    const profession = selectedProfession.replace(/^I am a /i, '');
    setProfession(profession);
    localStorage.setItem('selectedProfession', profession);
    fetchRecommendations(`I am a ${profession}`);
  };

  const fetchRecommendations = async (selectedProfession: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/get-recommendation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: selectedProfession }),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      const jsonRegex = /```json\n(\[\s*\{[\s\S]*?\}\s*\])\s*```/;
      const match = jsonRegex.exec(data.response);
      const jsonData = match ? JSON.parse(match[1]) : null;
      
      setRecommendations(jsonData);
      setShowRecommendations(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error fetching recommendations:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Header />
        <div className="max-w-4xl mx-auto mt-12">
          <ProfessionSearch onProfessionSelect={handleProfessionSelect} />
          {profession && recommendations && !showRecommendations && (
            <div className="mt-8 text-center">
              <h3 
                onClick={() => setShowRecommendations(true)}
                className="inline-flex items-center gap-2"
              >
                Opportunities for {profession}
              </h3>
            </div>
          )}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-8">Or select a profile</h2>
            <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading profiles...</div>}>
              <ProfessionGrid onProfessionSelect={handleProfessionSelect} />
            </Suspense>
          </div>
        </div>
      </main>
      {recommendations && profession && (
        <RecommendationsModal 
          profession={profession}
          recommendations={recommendations} 
          onClose={() => setShowRecommendations(false)}
          open={showRecommendations}
        />
      )}
      <Footer />
      
    </div>
  )
}

