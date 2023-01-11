import {motion} from 'framer-motion'
import { FC } from 'react';

type ScaleProps = {
    scale?: number;
    duration?: number;
    children: React.ReactNode;
}

export const ScaleInHover : FC<ScaleProps> = ({children, duration = 0.5, scale = 1.2}) => {
    return (
        <motion.div
            initial={{scale: 1}}
            whileHover={{
                scale: scale,
            }}
            transition={{duration: duration}}
            exit={{scale: 1}}
        >
            {children}
        </motion.div>
    )
}
