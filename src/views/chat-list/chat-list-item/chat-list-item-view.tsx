import { Box, Text, ListItem } from '@chakra-ui/react';
import { HStack, VStack, Avatar } from '@/ui-elements';
import { Contact } from '@/api/types';
import './chat-list-item-view.scss';

type Props = {
  contact: Contact;
}

export const ChatListItemView = ({ contact }: Props) => (
  <ListItem className="chat-list-item-view">
    <Box className="chat-list-item-view__avatar">
      <Avatar />
    </Box>
    <VStack className="chat-list-item-view__meta-wrapper">
      <HStack className="chat-list-item-view__meta">
        <Text textStyle="h3" color="typography.strong" noOfLines={1}>{contact.name}</Text>
        <Text color="typography.meta" noOfLines={1}>Вчера</Text>
      </HStack>
      <Text noOfLines={1} color="typography.meta">{contact.type}</Text>
    </VStack>
  </ListItem>
);
