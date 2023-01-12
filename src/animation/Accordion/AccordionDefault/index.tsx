import { Box } from "@mui/material";
import { AnimatePresence, CustomValueType, motion } from "framer-motion";
import { FC, useState } from "react";

type AccordionProps = Partial<Record<'initialColor' |"endColor", CustomValueType>>;

export const AccordionDefault: FC<AccordionProps> = ({initialColor="#0055FF", endColor="#FF0088"}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <motion.header
        style={{
          background: `${initialColor}`,
          borderRadius: '10px',
          color: 'white',
          cursor: 'pointer',
          width: '200px',
          height: '40px',
        }}
        initial={false}
        animate={{ backgroundColor: expanded ? endColor : initialColor }}
        onClick={() => setExpanded(!expanded)}
      />
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
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transformOrigin: 'top center',
              }}>
                <Box>teste accordion</Box>
                <Box>teste accordion</Box>
                <Box>teste accordion</Box>
                <Box>teste accordion</Box>
              </Box>
            </motion.section>
          )
        }
      </AnimatePresence>
    </Box>
  )
}
