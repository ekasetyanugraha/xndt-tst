import { AxiosResponse } from 'axios';
import University from 'interfaces/university';
import UrlParamsUniversity from 'interfaces/url-params-university';
import APIInstance from './api-instance';

const API_PATH = '/universities';

export const getUniversities =
  (params: UrlParamsUniversity = {}): Promise<University[]> =>
    APIInstance.get(`${API_PATH}`, {
      params,
    }).then((response: AxiosResponse<University[]>) => response.data);

export default {
  getUniversities,
};
