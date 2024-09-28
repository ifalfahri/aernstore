'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

interface StarRatingProps {
  onChange: (rating: number) => void
}

export function StarRating({ onChange }: StarRatingProps) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleRating = (value: number) => {
    setRating(value)
    onChange(value)
  }

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{
              scale: star <= (hover || rating) ? [1, 1.2, 1] : 1,
              transition: { duration: 0.2 }
            }}
          >
            <Star
              className={`w-10 h-10 sm:w-8 sm:h-8 cursor-pointer ${
                star <= (hover || rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(rating)}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}