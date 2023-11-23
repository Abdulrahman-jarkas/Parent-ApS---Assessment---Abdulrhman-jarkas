import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//we can set it as environment variable in case we have multi environments.
const BASEURL = 'https://reqres.in/api/';

const APIS = {
  USERS: BASEURL + 'users',
};
@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly http = inject(HttpClient);

  users() {
    return this.http.get(APIS.USERS);
  }

  userDetails(id: number) {
    return this.http.get(APIS.USERS + '/' + id);
  }

  createUser(body: any) {
    return this.http.post(APIS.USERS, { ...body });
  }

  updateUser(id: number, body: any) {
    return this.http.put(APIS.USERS + '/' + id, { ...body });
  }

  deleteUser(id: number) {
    return this.http.delete(APIS.USERS + '/' + id);
  }
}
