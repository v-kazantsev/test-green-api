import { Box } from '@chakra-ui/react';
import { ChatContentView } from '@/views/chat';
import './chat-body.scss';

export const ChatBodyView = () => (
  <Box className="chat-body-view">
    <ChatContentView />
  </Box>
);
