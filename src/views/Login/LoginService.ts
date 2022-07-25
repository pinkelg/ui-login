import { appClient } from '../../config/axios';
import { LoginResponse } from './LoginResponse';
import { credentialProps } from '../../components/LoginForm';

export const login = async (props: credentialProps): Promise<LoginResponse> => {
  const response = await appClient.post<LoginResponse>('/auth/login', { ...props });
  return response.data;
};
