import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Logger } from '../utils';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    Logger.info('Component - LoginForm UseEffect');
  }, []);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Logger.info('LoginForm - OnSubmit', username, password);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <div className={styles.formTitle}>
          <Typography variant="h4">Login Form</Typography>
        </div>
        <div className={styles.formControlsContainer}>
          <TextField
            data-testid="username"
            variant="outlined"
            className={styles.textField}
            placeholder="Username/Email"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="email"
          />

          <TextField
            data-testid="password"
            variant="outlined"
            className={styles.textField}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
          />

          <Button variant="contained" type="submit" className={`${styles.button} ${styles.submitButton}`}>
            Login
          </Button>

          <div className={styles.resetRegisterControls}>
            <Link href="/reset" underline="hover">
              Forgot Password?
            </Link>
            <Link href="/register" underline="hover">
              Register
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
