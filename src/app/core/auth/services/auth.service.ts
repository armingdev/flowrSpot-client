import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  login(user: {email: string, password: string }) {
    return this.httpClient.post<{auth_token: string}>(this.baseUrl + '/users/login', user).pipe(tap(res => {
      localStorage.setItem('access_token', res.auth_token);
      this.me().subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));
      });
    }));
  }

  register(user: {email: string, password: string, first_name: string, last_name: string, date_of_birth: string}) {
    return this.httpClient.post<{auth_token: string}>(this.baseUrl + '/users/register', user).pipe(tap(res => {
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get isLogged(): boolean {
    return localStorage.getItem('access_token') !==  null;
  }

  me() {
    return this.httpClient.get(this.baseUrl + '/users/me').pipe(tap(res => {
    }));
  }
}
