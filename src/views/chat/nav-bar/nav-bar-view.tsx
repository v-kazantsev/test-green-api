import { Box, Text } from '@chakra-ui/react';
import {
  SearchOutline,
  EllipsisVerticalOutline
} from 'react-ionicons';
import { AvatarView } from '@/views';
import { HStack, VStack } from '@/ui-elements';
import './nav-bar-view.scss';

type Props = {
  contact?: string;
  visit?: string;
}

export const NavBarView = ({ contact, visit }: Props) => (
  <HStack className="nav-bar-view">
    <AvatarView />
    <VStack>
      <Text textStyle="h3">{contact}</Text>
      <Text>{visit}</Text>
    </VStack>
    <Box mr={8}><SearchOutline /></Box>
    <Box><EllipsisVerticalOutline /></Box>
    <Box></Box>
  </HStack>
);
