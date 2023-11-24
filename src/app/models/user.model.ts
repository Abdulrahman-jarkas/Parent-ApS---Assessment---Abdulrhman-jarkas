import { GetResponse, PaginationApi } from './utils.model';

export interface UserDetails {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface CreateUserDto {
  name: string;
  job: string;
}

export interface UpdateUserDto extends CreateUserDto {}

export type GetUsersListResponse = GetResponse<UserDetails[]> & PaginationApi;

export type GetUserDetailsResponse = GetResponse<UserDetails>;
