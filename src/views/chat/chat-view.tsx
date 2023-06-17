import { VStack } from '@/ui-elements';
import { ChatFooterVM, ChatHeaderVM, ChatBodyVM } from '@/view-models';
import './chat-view.scss';

export const ChatView = () => (
  <VStack className="chat-view">
    <ChatHeaderVM />
    <ChatBodyVM />
    <ChatFooterVM />
  </VStack>
);
