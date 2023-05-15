import { useState } from 'react';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { chatlistActions } from '@/features/chatlist/slice';
import { ChatListSearchView } from '@/views/chat-list';

export const ChatListSearchVM = () => {
  const [chatId, setChatId] = useState('');
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(chatlistActions.select(`${chatId}@c.us`));
  }
  return (
    <form onSubmit={handleSubmit}>
      <ChatListSearchView value={chatId} onChange={setChatId} />
    </form>
  )
}