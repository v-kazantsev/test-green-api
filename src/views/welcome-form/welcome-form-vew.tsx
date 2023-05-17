import {
  Box,
  BoxProps,
  Input,
  FormControl,
  FormLabel,
  Button,
  Center
} from '@chakra-ui/react';
import './welcome-form-view.scss';

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  setApiTokenInstance: (value: string) => void;
  setIdInstance: (value: string) => void;
  idInstance: string;
  apiTokenInstance: string;
} & BoxProps

export const WelcomeFormView = ({ onSubmit, setIdInstance, setApiTokenInstance, idInstance, apiTokenInstance, ...props }: Props) => (
  <Box {...props} className="welcome-form-view">
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>idInstance</FormLabel>
        <Input name="idInstance" onChange={(e) => setIdInstance(e.target.value)} value={idInstance} />
        <FormLabel>apiTokenInstance</FormLabel>
        <Input name="apiTokenInstance" onChange={(e) => setApiTokenInstance(e.target.value)} value={apiTokenInstance} />
      </FormControl>
      <Center mt={5}><Button type="submit">Отправить</Button></Center>
    </form>
  </Box>
);
