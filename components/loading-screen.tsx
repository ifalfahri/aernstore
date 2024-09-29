'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <Image
          src="/AernStoreV.svg"
          alt="AernStore"
          width={300}
          height={300}
          quality={90}
          unoptimized={true}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 0 }}
        animate={{ scale: 100 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ originX: 0.5, originY: 0.5 }}
      />
    </div>
  )
}