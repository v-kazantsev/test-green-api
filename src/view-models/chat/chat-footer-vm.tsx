import { useState } from 'react';
import { useAppSelector } from '@/hooks/use-app-selector';
import { chatIdSelector } from '@/features/chatlist/selectors/chat-id-selector';
import { ChatFooterView } from '@/views/chat';
import { TextMessageAPI } from '@/api/text-message-api';

export const ChatFooterVM = () => {
  const [message, setMessage] = useState('');
  const chatId = useAppSelector(chatIdSelector);
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId && message) TextMessageAPI.sendTextMessage({
      chatId,
      message
    });
    setMessage('');
  }
  return chatId
  ? (<form onSubmit={handleSubmit}>
      <ChatFooterView value={message} onChange={setMessage} disabled={!chatId || !message} />
    </form>)
  : null;
}