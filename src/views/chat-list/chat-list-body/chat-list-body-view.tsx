import { Box, List } from '@chakra-ui/react';
import { ChatListItemView } from '@/views/chat-list';
import { Contact } from '@/api/types';
import './chat-list-body.scss';

type Props = {
  contacts: Array<Contact>
}

export const ChatListBodyView = ({ contacts }: Props) => (
  <Box className="chat-list-body">
    <List className="chat-list-body__list">
      {contacts.map((contact) => <ChatListItemView contact={contact} key={contact.id} />)}
    </List>
  </Box>
);
