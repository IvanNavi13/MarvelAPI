import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean = false;
  public username!: string;
  public password!: string;

  constructor() { }

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

}
