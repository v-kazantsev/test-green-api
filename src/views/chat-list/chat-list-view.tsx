import { VStack } from '@chakra-ui/react';
import {
  ChatListHeaderView,
  ChatListSearchView,
  ChatListBodyView,
  ChatListMessageView
} from '@/views/chat-list';

export const ChatListView = () => (
  <VStack spacing={0} w="full" justify="start">
    <ChatListHeaderView />
    <ChatListSearchView />
    <ChatListBodyView />
    <ChatListMessageView />
  </VStack>
)