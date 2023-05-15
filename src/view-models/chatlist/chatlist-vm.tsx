import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { getContacts } from '@/features/contacts/actions/get-contacts';
import { ChatListView } from '@/views';

export const ChatListVM = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return <ChatListView />
}