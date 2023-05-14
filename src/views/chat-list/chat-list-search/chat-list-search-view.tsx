import { Input, IconButton, InputGroup, InputLeftElement  } from '@chakra-ui/react';
import { FilterOutline, SearchOutline } from 'react-ionicons'
import { HStack } from '@/ui-elements';
import './chat-list-search.scss';

export const ChatListSearchView = () => (
  <HStack className="chat-list-search">
    <InputGroup>
    <InputLeftElement>
      <SearchOutline height="16px" width="16px" />
    </InputLeftElement>
    <Input
      name="search"
      pl="65px"
      pr="32px"
      bg="chatlist.search.input.background"
      placeholder="Поиск или новый чат"
    />
    </InputGroup>
    <IconButton aria-label="filter" icon={<FilterOutline />} bg="transparent" />
  </HStack>
);
