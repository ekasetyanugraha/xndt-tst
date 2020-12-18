import APIInstance from './api-instance';

const API_PATH = '/universities';

export const getUniversities = () => APIInstance.get(`${API_PATH}`);

export default {
  getUniversities,
};
