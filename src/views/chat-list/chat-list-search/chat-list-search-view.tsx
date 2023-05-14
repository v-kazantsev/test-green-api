import { HStack } from '@/ui-elements';
import './chat-list-search.scss';

export const ChatListSearchView = () => (
  <HStack className="chat-list-search">
    <input name="search" />
    <button type="button">Filter</button>
  </HStack>
);
