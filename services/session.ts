import { AxiosResponse } from 'axios';
import APIInstance from './api-instance';

const API_PATH = '/sessions';

export const login = (data = {}): Promise<AxiosResponse> => APIInstance.post(`${API_PATH}/login`, data);
export const logout = (): Promise<AxiosResponse> => APIInstance.post(`${API_PATH}/logout`);

export default {
  login,
  logout,
};
