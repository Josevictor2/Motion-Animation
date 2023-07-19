import { FC, useCallback, useEffect } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { Backdrop } from '../../BackDrop';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const ModalDefault: FC<ModalProps> = ({children, isOpen, closeModal}) => {

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


  const variants: Variants = {
    visible: () => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: 'tween',
      },
    }),
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    exit: {
      y: '100vh',
      opacity: 0,
      transition: {
        duration: 0.2,
        type: 'tween',
      },
    },
  };

  return (
    <>
      <AnimatePresence
      initial={false}
      mode="wait"
      onExitComplete={() => null}>
          {isOpen && (
          <Backdrop>
            <motion.div
              onClick={(e) => handleClickOutside(e)}
              initial={'hidden'}
              animate={'visible'}
              exit={'exit'}
              variants={variants}
              className="fixed top-0 left-0 flex justify-center items-center w-screen h-full"
              >
              {children}
            </motion.div>
          </Backdrop>
          )}
      </AnimatePresence>
    </>
  )
}
