import { useState } from 'react';
import  {useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import { credentialsSelector} from '@/features/credentials/selectors/credentials-selector'
import  {credentialsActions } from '@/features/credentials/slice';
import { ContentContainerView, WelcomeFormView } from '@/views';

export const ContentContainerVM = () => {
  const dispatch = useAppDispatch();
  const credentials = useAppSelector(credentialsSelector);
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('')
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(credentialsActions.set({
      idInstance,
      apiTokenInstance
    }))
    setIdInstance('');
    setApiTokenInstance('');
  }

  return credentials?.idInstance && credentials?.apiTokenInstance
  ? <ContentContainerView />
  : (
      <WelcomeFormView
        onSubmit={onSubmit}
        setIdInstance={setIdInstance}
        setApiTokenInstance={setApiTokenInstance}
        idInstance={idInstance}
        apiTokenInstance={apiTokenInstance}
      />
  )
}