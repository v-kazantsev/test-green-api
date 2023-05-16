import { VStack } from '@/ui-elements';
import { ChatBodyView } from '@/views/chat';
import { ChatFooterVM, ChatHeaderVM } from '@/view-models';
import './chat-view.scss';

export const ChatView = () => (
  <VStack className="chat-view">
    <ChatHeaderVM />
    <ChatBodyView />
    <ChatFooterVM />
  </VStack>
);
