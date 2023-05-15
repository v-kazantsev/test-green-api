import { Box, Text, ListItem } from '@chakra-ui/react';
import { HStack, VStack, Avatar } from '@/ui-elements';
import './chat-list-item-view.scss';

export const ChatListItemView = () => (
  <ListItem className="chat-list-item-view">
    <Box className="chat-list-item-view__avatar">
      <Avatar />
    </Box>
    <VStack className="chat-list-item-view__meta-wrapper">
      <HStack className="chat-list-item-view__meta">
        <Text textStyle="h3" color="typography.strong" noOfLines={1}>Адресат</Text>
        <Text color="typography.meta" noOfLines={1}>Вчера</Text>
      </HStack>
      <Text noOfLines={1}>Краткое содержание</Text>
    </VStack>
  </ListItem>
);
