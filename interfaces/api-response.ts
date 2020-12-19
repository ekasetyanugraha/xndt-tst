export interface ApiResponseMeta {
  status: number;
}

export interface ApiResponseMetaPaginated extends ApiResponseMeta {
  limit: number;
  offset: number;
  total: number;
}

export interface ApiResponse<T> {
  data: T;
  meta: ApiResponseMeta;
}

export interface ApiResponsePaginated<T> {
  data: T[];
  meta: ApiResponseMetaPaginated;
}
