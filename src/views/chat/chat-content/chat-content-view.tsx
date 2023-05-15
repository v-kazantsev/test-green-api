import { VStack } from '@/ui-elements';
import { ChatMessageView } from '@/views/chat';
import './chat-content-view.scss';

export const ChatContentView = () => (
  <VStack className="chat-content-view">
    <ChatMessageView type="incoming" message="Incoming Message" />
    <ChatMessageView type="outcoming" message="Outcoming Message" />
    <ChatMessageView type="incoming" message="Incoming Message" />
    <ChatMessageView type="outcoming" message="Outcoming Message" />
    <ChatMessageView type="incoming" message="Incoming Message" />
    <ChatMessageView type="outcoming" message="Outcoming Message" />
    <ChatMessageView type="incoming" message="Incoming Message" />
    <ChatMessageView type="outcoming" message="Outcoming Message" />
    <ChatMessageView type="incoming" message="Incoming Message" />
    <ChatMessageView type="outcoming" message="Outcoming Message" />
    <ChatMessageView type="incoming" message="Incoming Message" />
    <ChatMessageView type="outcoming" message="Outcoming Message" />
  </VStack>
);
