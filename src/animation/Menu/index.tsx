import { Box } from "@mui/material"
import { Container } from "@mui/system"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export const Menu = () => {
    const [isHover, toggleHover] = useState(false);
    const toggleHoverMenu = () => {
        toggleHover(!isHover);
    };
    const subMenuAnimate = {
        enter: {
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 0.5
          },
          display: "block"
        },
        exit: {
          opacity: 0,
          rotateX: -15,
          transition: {
            duration: 0.5,
            delay: 0.3
          },
          transitionEnd: {
            display: "none"
          }
        }
    };
    return (
        <Container>
            <motion.div 
            style={{
                width: '200px',
                perspective: 2000,
            }}
            onHoverStart={toggleHoverMenu}
            onHoverEnd={toggleHoverMenu}
            >
                <motion.div
                    whileHover={{
                        color: "#fff23f",
                        cursor: "pointer",
                    }}
                >
                    Menu
                </motion.div>
                <motion.div
                    initial="exit"
                    animate={isHover ? "enter" : "exit"}
                    variants={subMenuAnimate}
                    style={{
                        position: "absolute",
                        top: 30,
                        padding: 15,
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        transformOrigin: "50% -30px",
                    }}
                >
                    <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    }}>
                        <Box>TITLE 1</Box>
                        <Box>TITLE 2</Box>
                        <Box>TITLE 3</Box>
                    </Container>
                </motion.div>
            </motion.div>
        </Container>
    )
}