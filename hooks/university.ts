import { useState } from 'react';
import UrlParamsUniversity from 'interfaces/url-params-university';
import UniversityService from 'services/universities';

export default function useUniversity () {
  const [params, setParams] = useState({} as UrlParamsUniversity);
  const [meta, setMeta] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [universities, setUniversities] = useState([]);

  const getUniversities = async (params: UrlParamsUniversity = {}) => {
    setParams(params);
    setIsLoading(true);
    setIsError(false);

    try {
      const { data, meta } = await UniversityService.getUniversities(params);
      setUniversities(data);
      setMeta(meta);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    params,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    universities,
    meta,
    setUniversities,
    getUniversities,
  };
};
