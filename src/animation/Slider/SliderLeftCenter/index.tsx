import { motion } from "framer-motion";
import { FC } from "react";

type SliderProps = {
    children: React.ReactNode;
};

export const SliderLeftCenter: FC<SliderProps> = ({children}) => {
    return (
        <motion.div
        initial={{
            x: '-100vw',
            opacity: 0.5
        }}
        animate={{
            x: 0,
            opacity: 1
        }}
        transition={{ duration: 2, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}
