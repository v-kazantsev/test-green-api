import {
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';

export const ModalComponent = () => (
  <Modal isOpen onClose={() => null} closeOnEsc={false} closeOnOverlayClick={true} isCentered>
    <ModalOverlay opacity="0.1 !important" />
    <ModalContent minW="1600px" minH="94vh" m="auto" borderRadius={0}>
      Это модальное окно
    </ModalContent>
  </Modal>
);
