import { useState } from 'react';
import UniversityService from '../services/universities';

export default function useUniversity () {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [universities, setUniversities] = useState([]);

  const getUniversities = async (params = {}) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const universities = await UniversityService.getUniversities(params);
      setUniversities(universities);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    universities,
    setUniversities,
    getUniversities,
  };
};
