import { Box, Center } from '@chakra-ui/react';
import {
  PersonOutline,
  PeopleOutline,
  SyncOutline,
  EllipsisVerticalOutline,
  ChatbubblesOutline
} from 'react-ionicons';
import { HStack } from '@/ui-elements';
import './chat-list-header.scss';

export const ChatListHeaderView = () => (
  <HStack className="chat-list-header">
    <Box as="button" flexGrow={1}>
      <Center className="chat-list-header__avatar">
        <PersonOutline />
      </Center>
    </Box>
    <Center w="40px" h="40px"><PeopleOutline /></Center>
    <Center w="40px" h="40px"><SyncOutline /></Center>
    <Center w="40px" h="40px"><ChatbubblesOutline /></Center>
    <Center w="40px" h="40px"><EllipsisVerticalOutline /></Center>
  </HStack>
);
