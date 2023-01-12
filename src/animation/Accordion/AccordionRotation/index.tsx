import { Box, Container, Typography } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const AccordionRotate  = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "column",
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '300px',
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid #000',
      }}>
        <Typography> Accordion Rotate</Typography>
        <Box sx={{
          flexGrow: 1
        }} />
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setExpanded(!expanded)}
        >
          <ArrowForwardIosIcon />
        </motion.div>
      </Box>
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
    </Container>
  )
}
