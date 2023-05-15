import { Center, Image, Box } from '@chakra-ui/react';
import { PersonOutline } from 'react-ionicons';
import './avatar-view.scss';

type Props = {
  imageUrl?: string;
}

export const AvatarView = ({ imageUrl }: Props) => {
  return imageUrl
  ? (
    <Box>
      <Image src={imageUrl} alt="аватар" />
    </Box>
  )
  : (
    <Center className="avatar-view">
      <PersonOutline />
    </Center>
  )};
