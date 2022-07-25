import axios, { AxiosError } from 'axios';

export const appClient = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 2000,
  headers: {
    'Content-type': 'application/json'
  }
});

export { AxiosError };
