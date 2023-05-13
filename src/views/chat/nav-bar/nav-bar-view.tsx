import { HStack, VStack, Box } from '@chakra-ui/react';
import './nav-bar-view.scss';

export const NavBarView = () => (
  <HStack w="full" spacing ={0} className="nav-bar-view">
    <Box>Аватар</Box>
    <VStack spacing={0}>Название чата</VStack>
    <Box>Search</Box>
    <Box>Настройки</Box>
    <Box>Drawer</Box>
  </HStack>
);
