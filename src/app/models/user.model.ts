export interface UsersListApi {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserDetails[];
}

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
