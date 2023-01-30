import { motion } from "framer-motion";
import { FC } from "react";

type ContainerProps = {
  closeModal: () => void;
  isOpen: boolean;
};

export const ContainerModal: FC<ContainerProps> = ({closeModal, isOpen}) => {

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      closeModal();
    }
  };

return(
    <div role="dialog" aria-modal aria-labelledby="modal title" aria-hidden={!isOpen}
    className="w-80 h-20 bg-white rounded-xl border-2 border-zinc-900 flex flex-col justify-center items-center">
    <p className="text-gray-900">Contéudo aqui</p>
    <button
     type="button"
     onKeyDown={handleKeyPress}
     tabIndex={0}
     aria-label="Botão para fechar o modal"
     onClick={closeModal}>
      Close Modal
    </button>
  </div>
  )
};
