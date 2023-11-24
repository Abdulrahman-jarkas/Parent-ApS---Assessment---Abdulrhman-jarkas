import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  CreateUserDto,
  GetUserDetailsResponse,
  GetUsersListResponse,
  UpdateUserDto,
} from '../models';

//we can set it as environment variable in case we have multi environments.
const BASEURL = 'https://reqres.in/api/';

const APIS = {
  USERS: BASEURL + 'users',
};
@Injectable()
export class UsersService {
  private readonly http = inject(HttpClient);

  users(page: number = 1) {
    return this.http.get<GetUsersListResponse>(APIS.USERS + `?page=${page}`);
  }

  userDetails(id: number) {
    return this.http.get<GetUserDetailsResponse>(APIS.USERS + '/' + id);
  }

  createUser(body: CreateUserDto) {
    return this.http.post(APIS.USERS, { ...body });
  }

  updateUser(id: number, body: UpdateUserDto) {
    return this.http.put(APIS.USERS + '/' + id, { ...body });
  }

  deleteUser(id: number) {
    return this.http.delete(APIS.USERS + '/' + id);
  }
}
