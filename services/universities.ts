import { AxiosResponse } from 'axios';
import { ResponseGetUniversities } from 'interfaces/api-response-get-universities';
import UrlParamsUniversity from 'interfaces/url-params-university';
import APIInstance from './api-instance';

const API_PATH = '/universities';

export const getUniversities =
  (params: UrlParamsUniversity = {}): Promise<ResponseGetUniversities> =>
    APIInstance.get(`${API_PATH}`, {
      params,
    }).then((response: AxiosResponse<ResponseGetUniversities>) => response.data);

export default {
  getUniversities,
};
