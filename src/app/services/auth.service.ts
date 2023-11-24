import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

//we can set it as environment variable in case we have multi environments.
const BASEURL = 'https://reqres.in/api/';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  login(email: string, password: string) {
    return this.http
      .post<{ token: string }>(BASEURL + 'login', {
        email,
        password,
      })
      .pipe(tap((res) => this.setToken(res.token)));
  }

  register(email: string, password: string) {
    return this.http
      .post<{ token: string }>(BASEURL + 'register', {
        email,
        password,
      })
      .pipe(tap((res) => this.setToken(res.token)));
  }

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
