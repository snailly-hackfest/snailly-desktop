import { ipcRenderer } from 'electron';
import { useState } from 'react';

import { zustand } from '@/services';

import { axiosGet, displayErrorMessage } from '@/utils';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import LoginChildViews from './views';

const LoginChild = () => {
  const state = zustand();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const childAccountButtonHandler = async (data: {
    child_id: string;
    token: string;
  }) => {
    try {
      setIsLoading(true);
      const currentUserResponse = await axiosGet('auth/me', {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });
      const responseBlockedWebsite = await axiosGet(
        `classified-url/dangerous-website/${currentUserResponse.data.data.id}`,
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      const websites = responseBlockedWebsite.data.data;
      ipcRenderer.send('systemTray', 'show', data, websites);
    } catch (error) {
      displayErrorMessage(error, enqueueSnackbar);
    } finally {
      setIsLoading(false);
      router.replace('/home');
    }
  };

  return (
    <LoginChildViews
      childrenList={state.childrenList}
      childAccountButtonHandler={childAccountButtonHandler}
      isLoading={isLoading}
    />
  );
};

export default LoginChild;
