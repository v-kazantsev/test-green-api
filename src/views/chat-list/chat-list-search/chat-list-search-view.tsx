import { HStack } from '@chakra-ui/react';
import './chat-list-search.scss';

export const ChatListSearchView = () => (
  <HStack className="chat-list-search" w="full">
    <input name="search" />
    <button type="button">Filter</button>
  </HStack>
);
