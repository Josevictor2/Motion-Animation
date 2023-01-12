import { FC, useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export const ModalDefault: FC<ModalProps> = ({children, isOpen, closeModal}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleWindowKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
        closeModal()
    }
  }, [closeModal]);

  useEffect(() => {
    window.addEventListener("keydown", handleWindowKeyDown);
    return () => window.removeEventListener("keydown", handleWindowKeyDown);
  }, [handleWindowKeyDown]);


  const variants: Variants = {
    visible: () => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        type: 'tween',
      },
      transitionDelay: isOpen ? '0.3s' : '',
      transitionProperty: 'background',
      background: isOpen ? ['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)'] : '',
    }),
    hidden: {
      y: '150%',
      opacity: 0,
      transition: {
        duration: 0.5,
        type: 'tween',
      },
      background: 'rgba(0,0,0,0)',
    },
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            variants={variants}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100vw',
              height: '100%',
              zIndex: 1001,
            }}
          >
            <div ref={modalRef}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
