import { VStack } from '@chakra-ui/react';
import {
  ChatListHeaderView,
  ChatListBodyView,
} from '@/views/chat-list';
import { ChatListSearchVM } from '@/view-models';

export const ChatListView = () => (
  <VStack spacing={0} w="full" justify="start">
    <ChatListHeaderView />
    <ChatListSearchVM />
    <ChatListBodyView />
  </VStack>
)