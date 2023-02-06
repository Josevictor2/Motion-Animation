import { FC, useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Backdrop } from '../BackDrop';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const ModalDropIn: FC<ModalProps> = ({children, isOpen, closeModal}) => {

  const handleWindowKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
        closeModal()
    }
  }, [closeModal]);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if(e.target !== e.currentTarget) {
      return;
    }
    closeModal();
  }

  useEffect(() => {
    window.addEventListener("keydown", handleWindowKeyDown);
    return () => window.removeEventListener("keydown", handleWindowKeyDown);
  }, [handleWindowKeyDown]);


  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
        y: "150%",
        opacity: 0,
        transition: {
          duration: 0.2,
          type: 'tween',
        },
    },
};

  return (
    <AnimatePresence
    initial={false}
    mode="wait"
    onExitComplete={() => null}>
        {
            isOpen ? (
            <Backdrop>
                <motion.div
                onClick={(e) => handleClickOutside(e)}
                variants={dropIn}
                initial={'hidden'}
                animate={'visible'}
                exit={'exit'}
                className="fixed top-0 left-0 flex justify-center items-center w-screen h-full"
                >
                    {children}
                </motion.div>
            </Backdrop>
            ) : null
        }
    </AnimatePresence>
  )
}
