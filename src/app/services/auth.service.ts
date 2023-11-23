import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//we can set it as environment variable in case we have multi environments.
const BASEURL = 'https://reqres.in/api/';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  login(email: string, password: string) {
    return this.http.post(BASEURL + 'login', {
      email,
      password,
    });
  }
}
