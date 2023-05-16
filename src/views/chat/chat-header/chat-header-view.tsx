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

export const ChatHeaderView = ({ contactDetails }: Props) => (
  <HStack className="chat-header-view">
    <Box>
      <Avatar />
    </Box>
    <VStack>
      <Text textStyle="h3">{contactDetails?.name}</Text>
      <Text>{contactDetails?.lastSeen}</Text>
    </VStack>
    <Box mr={8}><SearchOutline /></Box>
    <Box><EllipsisVerticalOutline /></Box>
    <Box></Box>
  </HStack>
);
