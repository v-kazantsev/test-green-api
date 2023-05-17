import {
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import { ContentContainerVM  } from '@/view-models';

export const ModalView = () => (
  <Modal isOpen onClose={() => null} closeOnEsc={false} closeOnOverlayClick={true} isCentered>
    <ModalOverlay opacity="0.1 !important" />
    <ModalContent minW="1600px" minH="94vh" m="auto" borderRadius={0}>
      <ContentContainerVM />
    </ModalContent>
  </Modal>
);
