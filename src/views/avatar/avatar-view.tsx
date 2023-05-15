import { Center } from '@chakra-ui/react';
import { PersonOutline } from 'react-ionicons';
import './avatar-view.scss';

type Props = {
  image?: React.ReactElement | JSX.Element;
}

export const AvatarView = ({ image }: Props) => {
  return image || (
    <Center className="avatar-view">
      <PersonOutline />
    </Center>
  )};
