import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Header } from '../../components/Header';
import { LoginForm, credentialProps } from '../../components/LoginForm';
import { LoginResponse } from './LoginResponse';
import { login } from './LoginService';
import { Logger } from '../../components/utils';
import styles from './Login.module.scss';
import { AxiosError } from '../../config/axios';

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState<null | String>('');

  useEffect(() => {
    Logger.info('View - LoginView Rendered');
  }, []);

  const { mutate: loginRequest } = useMutation((data: credentialProps): Promise<LoginResponse> => login(data), {
    onSuccess: async (data: LoginResponse) => {
      Logger.info('Login - Success', data);
    },
    onError: (error: AxiosError) => {
      const { request } = error;
      const { status } = request;

      if (status === 401) {
        setErrorMessage('Invalid Credentials!');
      } else {
        setErrorMessage('Something went wrong! Please try again.');
      }
    }
  });

  const onSubmit = (data: credentialProps): void => {
    setErrorMessage(null);
    loginRequest(data);
  };
  return (
    <>
      <Header />
      <div className={styles.LoginContainer}>
        <div className={styles.LoginContainer}>
          <LoginForm onSubmit={onSubmit} errorMessage={errorMessage} />
        </div>
      </div>
    </>
  );
};
