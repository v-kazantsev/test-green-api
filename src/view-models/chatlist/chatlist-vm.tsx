import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getContacts } from '@/features/contacts/actions/get-contacts';
import { contactsSelector } from '@/features/contacts/selectors/contacts-selector';
import { ChatListView } from '@/views';

export const ChatListVM = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(contactsSelector);
  useEffect(() => {
    if (contacts?.length === 0) dispatch(getContacts());
  }, [dispatch, contacts]);
  return <ChatListView />
};
