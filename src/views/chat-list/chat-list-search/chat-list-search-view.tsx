import { Input, IconButton, InputGroup, InputLeftElement  } from '@chakra-ui/react';
import { FilterOutline, SearchOutline } from 'react-ionicons'
import { HStack } from '@/ui-elements';
import './chat-list-search.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
}

export const ChatListSearchView = ({ value, onChange }: Props) => (
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
    <IconButton type="submit" aria-label="filter" icon={<FilterOutline />} bg="transparent" />
  </HStack>
);
