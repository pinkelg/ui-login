import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useFormik } from 'formik';

import * as Yup from 'yup';

import { Logger } from '../utils';

import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit(values) {
      Logger.info('LoginForm - OnSubmit', { ...values });
    },
    validationSchema: Yup.object({
      email: Yup.string().label('Email').required().email('Invalid email address'),
      password: Yup.string().label('Password').min(8, 'Password must be atleast 8 characters').required()
    })
  });

  useEffect(() => {
    Logger.info('Component - LoginForm UseEffect');
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formTitle}>
          <Typography variant="h4">Login</Typography>
        </div>
        <div className={styles.formControlsContainer}>
          <TextField
            error={!!(formik.touched.email && formik.errors && formik.errors.email)}
            data-testid="email"
            name="email"
            variant="outlined"
            className={styles.textField}
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors && formik.errors.email ? formik.errors.email : null}
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
