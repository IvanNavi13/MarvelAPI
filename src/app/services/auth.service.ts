import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import StorageHelper from '../utils/storage.helper';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean = false;

  constructor(public http: HttpClient) { }

  /*
  **    Login version 1
   */

  login() {
    this.auth = true;
    localStorage.setItem('auth', this.auth.toString()) //this.username?.toString(), this.password?.toString()
  }

  logout() {
    this.auth = false;
    localStorage.clear();
  }

  showSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
    return this.auth;
  }

  setSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
  }


  /*
  **    Login version 2 (API)
   */

  loginV2(username: string, password: string): Observable<any> {
    return this.http.post(environment.LOGIN_URL+'/api/login',
      {
        username,   
        password
      })
  }

  refreshTokenV2() {
    return this.http.post(environment.LOGIN_URL+'/api/refresh',
      {
        session: StorageHelper.getItem('session')
      })
  }


}