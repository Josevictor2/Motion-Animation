import { Box } from '@mui/material'
import { useCycle, motion } from 'framer-motion'
import { useState } from 'react'

export const CarrouselDefault = () => {
  const [index, setIndex] = useState(0)
  const slides = [
    {
      background: '#ff0000',
    },
    {
      background: '#00ff00',
    },
    {
      background: '#0000ff',
    }
  ]

  const nextSlide = () => {
    if (index === slides.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const prevSlide = () => {
    if (index === 0) {
      setIndex(slides.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <div>
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
        }}
        animate={{ x: -index * 100 + '%' }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {slides.map((slide, i) => (
          <Box key={i} sx={{
            width: '100px',
            height: '100px',
            background: slide.background,
          }} />
        ))}
      </motion.div>
      <button onClick={nextSlide}>Next</button>
      <button onClick={prevSlide}>Previous</button>
    </div>
  )
}
