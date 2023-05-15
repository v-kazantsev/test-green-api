import { Box, Input } from '@chakra-ui/react';
import { HStack } from '@/ui-elements';
import './chat-footer.scss';

type Props = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const ChatFooterView = ({ onChange, disabled = true, ...props }: Props) => (
  <HStack className="chat-footer-view">
    <Box>Footer</Box>
    <Box></Box>
    <Input
      name="message"
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
    <button type="submit" disabled={disabled}>Send</button>
  </HStack>
);
