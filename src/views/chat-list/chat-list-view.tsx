import {
  ChatListHeaderView,
  ChatListBodyView,
} from '@/views/chat-list';
import { VStack } from '@/ui-elements';
import { ChatListSearchVM } from '@/view-models';

export const ChatListView = () => (
  <VStack>
    <ChatListHeaderView />
    <ChatListSearchVM />
    <ChatListBodyView />
  </VStack>
)