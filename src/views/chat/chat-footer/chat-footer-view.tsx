import { Box } from '@chakra-ui/react';
import { HStack } from '@/ui-elements';
import './chat-footer.scss';

export const ChatFooterView = () => (
  <HStack className="chat-footer-view">
    <Box>Footer</Box>
    <Box></Box>
    <input name="reply" />
    <Box></Box>
  </HStack>
);
