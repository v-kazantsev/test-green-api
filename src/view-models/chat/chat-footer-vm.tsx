import { useState, useEffect } from 'react';
import { useAppSelector } from '@/hooks/use-app-selector';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { contactDetailsSelector } from '@/features/contact/selectors/contact-details-selector';
import { credentialsSelector } from '@/features/credentials/selectors/credentials-selector';
import { ChatFooterView } from '@/views/chat';
import { TextMessage } from '@/api/text-message-api';
import { getNotification } from '@/features/notifications/actions/get-notification';

export const ChatFooterVM = () => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState('');
  const { data: { chatId } } = useAppSelector(contactDetailsSelector);
  const credentials = useAppSelector(credentialsSelector);
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId && message) TextMessage.sendTextMessage({
      chatId,
      message,
    }, credentials);
    setMessage('');
  }
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getNotification())
    }, 300000);
    return () => clearInterval(interval);
  }, [credentials, dispatch]);
  return (
  <form onSubmit={handleSubmit}>
    <ChatFooterView value={message} onChange={setMessage} />
  </form>);
}