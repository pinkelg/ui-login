import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useFormik } from 'formik';

import * as Yup from 'yup';

import { Logger } from '../utils';

import styles from './LoginForm.module.scss';

export interface credentialProps {
  username: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (data: credentialProps) => void;
  errorMessage?: String;
}

export const LoginForm = (props: LoginFormProps) => {
  const { onSubmit, errorMessage } = props;
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit(values) {
      onSubmit(values);
    },
    validationSchema: Yup.object({
      username: Yup.string().label('Email').required().email('Invalid email address'),
      password: Yup.string().label('Password').min(8, 'Password must be atleast 8 characters').required()
    })
  });

  useEffect(() => {
    Logger.info('Component - LoginForm Rendered');
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formTitle}>
          <Typography variant="h4">Login</Typography>
        </div>
        <div className={styles.formControlsContainer}>
          <TextField
            error={!!(formik.touched.username && formik.errors && formik.errors.username)}
            data-testid="username"
            name="username"
            variant="outlined"
            className={styles.textField}
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            helperText={
              formik.touched.username && formik.errors && formik.errors.username ? formik.errors.username : null
            }
            type="text"
          />

          <TextField
            error={!!(formik.touched.password && formik.errors && formik.errors.password)}
            data-testid="password"
            name="password"
            variant="outlined"
            className={styles.textField}
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type="password"
            helperText={
              formik.touched.password && formik.errors && formik.errors.password ? formik.errors.password : null
            }
          />
          <Button variant="contained" type="submit" className={`${styles.button} ${styles.submitButton}`}>
            Login
          </Button>
          {errorMessage && (
            <Typography align="center" color="red">
              {errorMessage}
            </Typography>
          )}
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
