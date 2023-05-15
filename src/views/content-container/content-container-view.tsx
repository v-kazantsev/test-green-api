import { ChatView } from '@/views';
import { ChatListVM } from '@/view-models';
import { HStack, VStack } from '@/ui-elements';
import './content-container.scss'

export const ContentContainerView = () => (
  <HStack className="content-container-view">
    <VStack className="content-container-view__chat-list">
      <ChatListVM />
    </VStack>
      <ChatView />
  </HStack>
);
