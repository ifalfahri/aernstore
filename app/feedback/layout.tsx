'use client'
import { useState, useEffect } from 'react'
import FeedbackTabs from '@/components/feedback-tabs'
import { LoadingScreen } from '@/components/loading-screen'

export default function FeedbackLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500) 
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-[url('https://res.cloudinary.com/dyjxcujz4/image/upload/v1717142252/layered-waves-haikei_7_olvnqc.svg')] bg-cover">
      <main className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">AernStore</h1>
        <FeedbackTabs>{children}</FeedbackTabs>
      </main>
    </div>
  )
}