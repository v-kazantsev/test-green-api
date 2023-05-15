import { Box } from '@chakra-ui/react';
import classNames from 'classnames';
import './chat-message-view.scss';

type Props = {
  message: string;
  type: 'incoming' | 'outcoming'
};

export const ChatMessageView = ({ message, type}: Props) => (
  <Box className={classNames('chat-message-view', { [type]: type})}>
    {message}
  </Box>
);
