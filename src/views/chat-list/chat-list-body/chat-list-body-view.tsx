import { Box, List } from '@chakra-ui/react';
import { ChatListMessageView, ChatListItemView } from '@/views/chat-list';
import './chat-list-body.scss';

export const ChatListBodyView = () => (
  <Box className="chat-list-body">
    <List className="chat-list-body__list">
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
      <ChatListItemView />
    </List>
    <ChatListMessageView />
  </Box>
);
