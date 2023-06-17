import { VStack } from '@/ui-elements';
import { ChatMessageView } from '@/views/chat';
import './chat-content-view.scss';
import { ChatMessage } from '@/api/types';

type Props = {
  history: Array<ChatMessage>;
}

export const ChatContentView = ({ history }: Props) => 
(
  <VStack className="chat-content-view">
    {history.map((item) => <ChatMessageView message={item} key={item?.idMessage} />)}
  </VStack>
);
