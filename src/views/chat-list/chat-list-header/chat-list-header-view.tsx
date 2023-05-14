import { Box, Center } from '@chakra-ui/react';
import {
  PeopleOutline,
  SyncOutline,
  EllipsisVerticalOutline,
  ChatbubblesOutline
} from 'react-ionicons';
import { HStack } from '@/ui-elements';
import { AvatarView } from '@/views';
import './chat-list-header.scss';

export const ChatListHeaderView = () => (
  <HStack className="chat-list-header">
    <Box as="button" flexGrow={1}>
      <AvatarView />
    </Box>
    <Center w="40px" h="40px"><PeopleOutline /></Center>
    <Center w="40px" h="40px"><SyncOutline /></Center>
    <Center w="40px" h="40px"><ChatbubblesOutline /></Center>
    <Center w="40px" h="40px"><EllipsisVerticalOutline /></Center>
  </HStack>
);
