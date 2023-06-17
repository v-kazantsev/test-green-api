import { Box, Text } from '@chakra-ui/react';
import moment from 'moment';
import classNames from 'classnames';
import './chat-message-view.scss';
import { VStack } from '@/ui-elements';
import { ChatMessage } from '@/api/types';

type Props = {
  message: ChatMessage;
};

export const ChatMessageView = ({ message }: Props) => {
  const { type, textMessage, timestamp } = message
  return (
  <Box className={classNames('chat-message-view', { [type]: type})}>
    <VStack>
      <Text>{textMessage}</Text>
      <Text>{moment.unix(timestamp).format('DD.MM.YY HH:mm')}</Text>
    </VStack>
  </Box>
)};
