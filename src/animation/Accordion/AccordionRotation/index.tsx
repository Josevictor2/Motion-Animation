import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SvgArrowLeft } from './Icon/ArrowLeft';

export const AccordionRotate  = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row items-center w-80 p-3 rounded-xl border-2 border-[#000]">
        <p> Accordion Rotate</p>
        <div className="grow" />
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setExpanded(!expanded)}
        >
          <SvgArrowLeft className='cursor-pointer' />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {
          expanded && (
            <motion.section
              style={{ overflow: 'hidden' }}
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className="flex flex-col justify-center items-center transform origin-[center_top]">
                <p>teste accordion</p>
                <p>teste accordion</p>
                <p>teste accordion</p>
                <p>teste accordion</p>
              </div>
            </motion.section>
          )
        }
      </AnimatePresence>
    </div>
  )
}
