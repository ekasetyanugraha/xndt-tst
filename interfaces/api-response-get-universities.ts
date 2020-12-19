import University from './university';

export interface ResponseGetUniversitiesMeta {
  status: number;
  limit: number;
  offset: number;
  total: number;
}

export interface ResponseGetUniversities {
  data: University[];
  meta: ResponseGetUniversitiesMeta;
};
