import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth: boolean = false;

  public user?: string;
  public password?: string;
  
  constructor() { }

  login(){
    this.auth = true;
    localStorage.setItem('auth', this.auth.toString())
    // this.user = 
  }

  logout(){
    this.auth = false;
    localStorage.clear();
  }

  showSession(){
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');  //para almacenar en el localStorage si es que se cierra el navegador
    return this.auth;
  }

  setSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
  } 
}
