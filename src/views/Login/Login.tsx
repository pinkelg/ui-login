import { useEffect } from 'react';
import { Header } from '../../components/Header';
import { LoginForm } from '../../components/LoginForm';

import styles from './Login.module.scss';

export const Login = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <div className={styles.LoginContainer}>
        <div className={styles.LoginContainer}>
          <LoginForm />
        </div>
      </div>
    </>
  );
};
