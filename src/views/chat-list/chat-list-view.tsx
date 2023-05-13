import { VStack } from '@chakra-ui/react';
import { ChatListHeaderView } from './chat-list-header/chat-list-header';

export const ChatListView = () => (
  <VStack spacing={0} w="full">
    <ChatListHeaderView />
  </VStack>
)