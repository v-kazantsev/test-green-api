import { VStack } from '@/ui-elements';
import { ChatMessageView } from '@/views/chat';
import './chat-content-view.scss';
import { ChatMessage } from '@/api/types';

type Props = {
  history: Array<ChatMessage>;
}

export const ChatContentView = ({ history }: Props) => {
  console.log('history', history)
  return (
  <VStack className="chat-content-view">
    {history.map((item) => <ChatMessageView type={item.type} message={item.textMessage} />)}
  </VStack>
)};
