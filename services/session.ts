import APIInstance from './api-instance';

const API_PATH = '/sessions';

export const login = (data = {}): Promise<void> => APIInstance.post(`${API_PATH}`, data);

export default {
  login,
};
