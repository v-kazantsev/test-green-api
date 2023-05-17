import { useState } from 'react';
import { useAppSelector } from '@/hooks/use-app-selector';
import { contactDetailsSelector } from '@/features/contact/selectors/contact-details-selector';
import { ChatFooterView } from '@/views/chat';
import { TextMessage } from '@/api/text-message-api';

export const ChatFooterVM = () => {
  const [message, setMessage] = useState('');
  const { chatId } = useAppSelector(contactDetailsSelector);
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId && message) TextMessage.sendTextMessage({
      chatId,
      message
    });
    setMessage('');
  }
  return (
  <form onSubmit={handleSubmit}>
    <ChatFooterView value={message} onChange={setMessage} />
  </form>);
}