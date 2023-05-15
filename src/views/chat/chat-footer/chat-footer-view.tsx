import { Box, Input } from '@chakra-ui/react';
import { AttachOutline, HappyOutline, MicOutline } from 'react-ionicons'
import { HStack } from '@/ui-elements';
import './chat-footer.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
}

export const ChatFooterView = ({ onChange, ...props }: Props) => (
  <HStack className="chat-footer-view">
    <Box><HappyOutline color="#54656F" /></Box>
    <Box className="chat-footer-view__attach-icon"><AttachOutline color="#54656F" /></Box>
    <Input
      name="message"
      onChange={(e) => onChange(e.target.value)}
      {...props}
      bg="background.default"
      placeholder="Введите сообщение"
    />
    <Box ml={4}><MicOutline /></Box>
  </HStack>
);
