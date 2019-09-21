import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';
import {UserService} from '../../../generated/api/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) { }

  login(user: {email: string, password: string }) {
    return this.userService.postApiV1UsersLogin(user).pipe(tap(res => {
      localStorage.setItem('access_token', res.auth_token);
      this.me().subscribe(data => {
        localStorage.setItem('user', JSON.stringify(data));
      });
    }));
  }

  register(user: {email: string, password: string, first_name: string, last_name: string, date_of_birth: string}) {
    return this.userService.postApiV1UsersRegister(user).pipe(tap(res => {
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get isLogged(): boolean {
    return localStorage.getItem('access_token') !==  null;
  }

  me() {
    return this.userService.getApiV1UsersMe().pipe(tap(res => {
    }));
  }
}
