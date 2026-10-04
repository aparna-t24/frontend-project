import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import UploadSection from './components/UploadSection.jsx'
import DiagnosisDashboard from './components/DiagnosisDashboard.jsx'
import Visualizations from './components/Visualizations.jsx'
import Recommendations from './components/Recommendations.jsx'
import ReportSection from './components/ReportSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)

  const handleAnalyze = (isAnalyzing, isAnalyzed) => {
    setAnalyzing(isAnalyzing)
    if (typeof isAnalyzed === 'boolean') setAnalyzed(isAnalyzed)
  }

  useEffect(() => {
    if (analyzed) {
      const t = setTimeout(() => {
        document.getElementById('diagnosis')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 200)
      return () => clearTimeout(t)
    }
  }, [analyzed])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <UploadSection onAnalyze={handleAnalyze} analyzing={analyzing} analyzed={analyzed} />

        {analyzed && (
          <>
            <DiagnosisDashboard />
            <Visualizations />
            <Recommendations />
            <ReportSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
