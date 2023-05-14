import { VStack } from '@/ui-elements';
import { NavBarView, ChatBodyView, ChatFooterView } from '@/views/chat';
import './chat-view.scss';

export const ChatView = () => (
  <VStack className="chat-view">
    <NavBarView />
    <ChatBodyView />
    <ChatFooterView />
  </VStack>
)