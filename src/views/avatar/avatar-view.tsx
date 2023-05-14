import { Center } from '@chakra-ui/react';
import { PersonOutline } from 'react-ionicons';

type Props = {
  image?: React.ReactElement | JSX.Element;
}

export const AvatarView = ({ image }: Props) => {
  return image
  ? image
  : (
  <Center className="chat-list-header__avatar">
    <PersonOutline />
  </Center>
)};
