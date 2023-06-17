import { VStack } from '@/ui-elements'
import { ChatContentView } from '@/views/chat';
import './chat-body.scss';
import { ChatMessage } from '@/api/types';

type Props = {
  history: Array<ChatMessage>;
}

export const ChatBodyView = ({ history }: Props) => (
  <VStack className="chat-body-view">
    <ChatContentView history={history} />
  </VStack>
);
