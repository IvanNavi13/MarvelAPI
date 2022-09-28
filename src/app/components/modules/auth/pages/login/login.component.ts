import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm !: FormGroup;

  constructor(public authService: AuthService, private router: Router) {
    // this.authService.setSession();
  }

  ngOnInit(): void {
    this.formValidation();
    this.onSubmit();
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

  formValidation(){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.minLength(1), Validators.required] ), 
      password: new FormControl('', [Validators.minLength(1), Validators.required] ), 
      });
  }

  onSubmit(){
    this.authService.username = this.loginForm.get("username")?.value;
    this.authService.password = this.loginForm.get("password")?.value;
    // console.log(this.authService.username);
    // console.log(this.authService.password);
    this.login();
    // this.router.navigate(['characterMarvel']);
  }

}
