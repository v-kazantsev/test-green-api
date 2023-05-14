import { Text } from '@chakra-ui/react';
import { LockClosed } from 'react-ionicons'
import { HStack } from '@/ui-elements';
import './chat-list-message.scss';

export const ChatListMessageView = () => (
  <HStack className="chat-list-message">
    <LockClosed height="12px" width="12px" color="#3B4A54" />
    <Text fontSize="xs" ml={2} color="typography.primary">Ваши личные сообщения защищены сквозным шифрованием</Text>
  </HStack>
);
