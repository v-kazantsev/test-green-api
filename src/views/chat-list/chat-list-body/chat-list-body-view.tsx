import { Box } from '@chakra-ui/react';
import { ChatListMessageView } from '../chat-list-message/chat-list-message-view';

export const ChatListBodyView = () => (
  <Box className="chat-list-body">
    Chat list
    <ChatListMessageView />
  </Box>
);
