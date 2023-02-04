import { FC } from "react";
import { motion } from "framer-motion";

type BackDropProps = {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    children: React.ReactNode;
  }

export const Backdrop: FC<BackDropProps> = ({ children, onClick }) => {
 
  return (
    <motion.div
      onClick={onClick}
      className="flex justify-center items-center absolute top-0 left-0 w-screen h-full bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};