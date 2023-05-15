import { Box, Center } from '@chakra-ui/react';
import {
  PeopleOutline,
  SyncOutline,
  EllipsisVerticalOutline,
  ChatboxEllipsesOutline
} from 'react-ionicons';
import { HStack, Avatar } from '@/ui-elements';
import './chat-list-header.scss';

export const ChatListHeaderView = () => (
  <HStack className="chat-list-header">
    <Box flexGrow={1}>
      <Avatar />
    </Box>
    <Center w="40px" h="40px"><PeopleOutline /></Center>
    <Center w="40px" h="40px"><SyncOutline /></Center>
    <Center w="40px" h="40px"><ChatboxEllipsesOutline /></Center>
    <Center w="40px" h="40px"><EllipsisVerticalOutline /></Center>
  </HStack>
);
