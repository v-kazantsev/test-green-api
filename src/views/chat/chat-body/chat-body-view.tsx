import { VStack } from '@/ui-elements'
import { ChatContentView } from '@/views/chat';
import './chat-body.scss';

export const ChatBodyView = () => (
  <VStack className="chat-body-view">
    <ChatContentView />
  </VStack>
);
