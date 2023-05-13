import { HStack, VStack } from '@chakra-ui/react';
import { ChatView, ChatListView } from '@/views';

export const ContentContainerView = () => (
  <HStack spacing={0} w="full">
    <VStack flexBasis="30%" justify="start">
      <ChatListView />
    </VStack>
    <VStack flexGrow={1} justify="start">
      <ChatView />
    </VStack>
  </HStack>
);
