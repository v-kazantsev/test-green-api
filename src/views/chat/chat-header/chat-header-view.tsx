import { Box, Text } from '@chakra-ui/react';
import {
  SearchOutline,
  EllipsisVerticalOutline
} from 'react-ionicons';
import { HStack, VStack, Avatar } from '@/ui-elements';
import './chat-header-view.scss';
import { ContactDetails } from '@/api/types';

type Props = {
  contactDetails: ContactDetails;
}

export const ChatHeaderView = ({ contactDetails }: Props) => {
  const [contactId] = (contactDetails?.chatId || '').split('@');
  return (
  <HStack className="chat-header-view">
    <Box mr={4}>
      <Avatar imageUrl={contactDetails?.avatar} />
    </Box>
    <VStack>
      <Text textStyle="h3">{contactDetails?.name || `+${contactId}`}</Text>
      {contactDetails?.lastSeen && <Box><Text mr={1}>Был(-а)</Text><Text>{contactDetails.lastSeen}</Text></Box>}
    </VStack>
    <Box mr={8}><SearchOutline /></Box>
    <Box><EllipsisVerticalOutline /></Box>
  </HStack>
)};
