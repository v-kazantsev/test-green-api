import { HStack, Box } from '@chakra-ui/react';
import './chat-footer.scss';

export const ChatFooterView = () => (
  <HStack w="full" className="chat-footer-view">
    <Box>Footer</Box>
    <Box></Box>
    <input name="reply" />
    <Box></Box>
  </HStack>
);
