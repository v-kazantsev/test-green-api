import { useAppSelector } from '@/hooks/use-app-selector';
import { ChatListBodyView } from '@/views/chat-list';
import { contactsSelector } from '@/features/contacts/selectors/contacts-selector';

export const ChatListBodyVM = () => {
  const contacts = useAppSelector(contactsSelector);
  
  return <ChatListBodyView contacts={contacts} />;
};
