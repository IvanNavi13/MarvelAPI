import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public authService: AuthService) {
    this.authService.setSession();
  }

  login(){
    this.authService.login();
  }
  
  logout(){
    this.authService.logout();
  }

  showSession(){
    return this.authService.showSession();
  }

}
