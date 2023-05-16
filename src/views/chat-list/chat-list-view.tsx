import { ChatListHeaderView, ChatListMessageView } from '@/views/chat-list';
import { VStack } from '@/ui-elements';
import { ChatListSearchVM, ChatListBodyVM } from '@/view-models';

export const ChatListView = () => (
  <VStack>
    <ChatListHeaderView />
    <ChatListSearchVM />
    <ChatListBodyVM />
    <ChatListMessageView />
  </VStack>
)