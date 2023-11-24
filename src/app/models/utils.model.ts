export interface ColumnsDef {
  name: string;
  type: 'text' | 'image';
  key: string;
}

export interface PaginationApi {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
export interface GetResponse<T> {
  data: T;
}
