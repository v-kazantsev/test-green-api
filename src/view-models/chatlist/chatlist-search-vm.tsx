import { useState } from 'react';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { getContactDetails } from '@/features/contact/actions/get-contact-details';
import { ChatListSearchView } from '@/views/chat-list';

export const ChatListSearchVM = () => {
  const [chatId, setChatId] = useState('');
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getContactDetails(`${chatId}@c.us`));
  }
  return (
    <form onSubmit={handleSubmit}>
      <ChatListSearchView value={chatId} onChange={setChatId} />
    </form>
  )
}