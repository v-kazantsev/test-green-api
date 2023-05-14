import { VStack } from '@chakra-ui/react';
import {
  ChatListHeaderView,
  ChatListSearchView,
  ChatListBodyView,
  
} from '@/views/chat-list';

export const ChatListView = () => (
  <VStack spacing={0} w="full" justify="start">
    <ChatListHeaderView />
    <ChatListSearchView />
    <ChatListBodyView />
  </VStack>
)