import { useAppSelector } from '@/hooks/use-app-selector';
import { contactDetailsSelector } from '@/features/contact/selectors/contact-details-selector';
import { ChatHeaderView } from '@/views/chat';

export const ChatHeaderVM = () => {
  const { isLoading, data: contactDetails } = useAppSelector(contactDetailsSelector);
  return isLoading ? <div>loading...</div> : <ChatHeaderView contactDetails={contactDetails} />
};
