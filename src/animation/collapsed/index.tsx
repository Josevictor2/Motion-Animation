import {AnimatePresence, motion} from 'framer-motion'
import { useState } from 'react';

export const Collapsed = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    return (
        <>
            <motion.header style={{
                background: '#0055ff',
                borderRadius: '10px',
                color: 'white',
                cursor: 'pointer',
                height: '40px',
                marginBottom: '20px',
            }}
            initial={false}
            animate={{ backgroundColor: expanded ? "#FF0088" :"#0055FF"}}
            onClick={() => setExpanded(!expanded)}
            >
            </motion.header>
                <AnimatePresence initial={false}>
                    {expanded && (
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
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transformOrigin: 'top center',
                        }}>
                            <div>teste accordion</div>
                            <div>teste accordion</div>
                            <div>teste accordion</div>
                            <div>teste accordion</div>
                        </div>
                    </motion.section>
                    )}
                </AnimatePresence>
        </>
    )
}