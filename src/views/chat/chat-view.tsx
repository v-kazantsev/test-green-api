import { VStack } from '@/ui-elements';
import { NavBarView, ChatBodyView } from '@/views/chat';
import { ChatFooterVM } from '@/view-models';
import './chat-view.scss';

export const ChatView = () => (
  <VStack className="chat-view">
    <NavBarView />
    <ChatBodyView />
    {/* <ChatFooterView /> */}
    <ChatFooterVM />
  </VStack>
)