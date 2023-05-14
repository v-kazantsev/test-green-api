import { Box } from '@chakra-ui/react';
import { HStack } from '@/ui-elements';
import './chat-list-header.scss';

export const ChatListHeaderView = () => (
  <HStack className="chat-list-header">
    <Box>Avatar</Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
  </HStack>
);
