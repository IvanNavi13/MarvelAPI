import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import StorageHelper from '../../../../../utils/storage.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm !: FormGroup;
  username!: string;
  password!: string;

  constructor(public authService: AuthService, public router: Router) {
    // this.authService.setSession();
  }

  ngOnInit(): void {
    this.formValidation();
    // this.onSubmit();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  showSession() {
    return this.authService.showSession();
  }

  formValidation() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.minLength(1), Validators.required]),
      password: new FormControl('', [Validators.minLength(1), Validators.required]),
    });
  }

  onSubmit() {

    // // this.authService.username = this.loginForm.get("username")?.value;
    // // this.authService.password = this.loginForm.get("password")?.value;
    // console.log(this.authService.username);
    // console.log(this.authService.password);
    // // this.login();
    // this.router.navigate(['characterMarvel']);

    /**Version 2 */
    this.username = this.loginForm.get("username")?.value;
    this.password = this.loginForm.get("password")?.value;
    console.log(this.username)
    console.log(this.password)

    this.login();
    this.router.navigate(['/auth/home'])

    // this.authService.loginV2(this.username, this.password).subscribe(
    //   {
    //     next: (resp: any) => {
    //       StorageHelper.setItem('session', resp)
    //       // console.log(resp);
    //       this.router.navigate(['/auth/home'])
    //     }
    //   });

  }

}
