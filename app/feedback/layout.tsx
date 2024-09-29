'use client'
import { useState, useEffect } from 'react'
import FeedbackTabs from '@/components/feedback-tabs'
import { LoadingScreen } from '@/components/loading-screen'
import Image from 'next/image'

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
      <main className="container mx-auto flex flex-col items-center justify-center py-6">
        <Image
            src="/AernStoreV.svg"
            alt="AernStore"
            width={200}
            height={200}
            className='flex justify-center items-center pb-6'
            quality={100}
            unoptimized={true}
            />
        <FeedbackTabs>{children}</FeedbackTabs>
      </main>
    </div>
  )
}