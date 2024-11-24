'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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
              <img
                src="/AernStoreV.svg"
                alt="AernStore"
                className='w-60 h-40 md:w-96 md:h-60'
              />
            </motion.div>
            <motion.h1
              className="text-3xl font-bold text-center text-primary"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Halaman Utama Belum Jadi
            </motion.h1>
            <p className="text-center text-muted-foreground">
              Aldo masih capek. <a href="https://github.com/ifalfahri" className='text-primary'>#SaveAldo</a>
            </p>
      </motion.div>
    </div>
  )
}