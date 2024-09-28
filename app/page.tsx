'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { LoadingScreen } from '@/components/loading-screen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="max-w-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-md mx-4">
          <CardContent className="flex flex-col items-center space-y-6 p-6">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <Image
                src="/aernsture.svg"
                alt="AernStore"
                width={100}
                height={100}
                className="rounded-full shadow-lg"
              />
            </motion.div>
            <motion.h1
              className="text-3xl font-bold text-center text-primary"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Belum Jadi
            </motion.h1>
            <p className="text-center text-muted-foreground">
              Aldo masih capek. <a href="https://github.com/ifalfahri" className='text-primary'>#SaveAldo</a>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}