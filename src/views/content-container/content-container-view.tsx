import { ChatView, ChatListView } from '@/views';
import { HStack, VStack } from '@/ui-elements';
import './content-conteiner.scss'

export const ContentContainerView = () => (
  <HStack className="content-container-view">
    <VStack className="content-container-view__chat-list">
      <ChatListView />
    </VStack>
      <ChatView />
  </HStack>
);
