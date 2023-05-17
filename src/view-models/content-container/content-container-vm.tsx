import { useState } from 'react';
import { ContentContainerView, WelcomeFormView } from '@/views';

export const ContentContainerVM = () => {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('')
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    setIdInstance('');
    setApiTokenInstance('');
  }

  return (
      <WelcomeFormView
        onSubmit={onSubmit}
        setIdInstance={setIdInstance}
        setApiTokenInstance={setApiTokenInstance}
        idInstance={idInstance}
        apiTokenInstance={apiTokenInstance}
      />
  )
}