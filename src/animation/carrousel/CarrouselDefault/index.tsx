import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { DivComponent } from "../../../components/DivComponent"

const colors = [
  '#0000CD',
  '#006400',
  '#008000',
  '#008080',
  '#00BFFF',
  '#00CED1',
  '#00FA9A',
]

export const CarrouselDefault = () => {
  const [ width, setWidth ] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])
return(
  <div style={{
    width:'90%',
  }}>
      <AnimatePresence>
        <motion.div 
        ref={carousel} 
        whileTap={{ cursor: 'grabbing' }}
        style={{
          cursor: 'grab',
          overflow: 'hidden',
        }}>
            <motion.div 
            drag="x"
            dragConstraints={{
              right: 0,
              left: -width,
            }}
            initial={{
              x: 0,
            }}
            animate={{
              x: -width,
            }}
            exit={{
              x: 0,
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            style={{
              display: 'flex',
              gap: '20px',
            }}>
              {
                colors.map((color, index) => (
                    <motion.div style={{
                      minHeight: '100px',
                      minWidth: '200px',
                      padding: '20px',
                    }} 
                    key={index}>
                      <DivComponent key={index} color={color} />
                    </motion.div>
                ))
              }
            </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
)
}
