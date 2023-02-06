import { FC } from "react";
import { motion } from "framer-motion";

type BackDropProps = {
    children: React.ReactNode;
  }

export const Backdrop: FC<BackDropProps> = ({ children }) => {
 
  return (
    <motion.div
      className="flex justify-center items-center absolute top-0 left-0 w-screen h-full bg-black bg-opacity-50"
      initial={{ 
        opacity: 0, 
      }}
      transition={{ delay: 0.4 }}
      animate={{ 
        opacity: 1,
      }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};