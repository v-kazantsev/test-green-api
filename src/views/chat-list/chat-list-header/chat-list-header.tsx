import { HStack, Box } from '@chakra-ui/react';
import './chat-list-header.scss';

export const ChatListHeaderView = () => (
  <HStack spacing={0} w="full" className="chat-list-header">
    <Box>Avatar</Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
    <Box></Box>
  </HStack>
);
