import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements /*CanActivate,*/ CanLoad {

  constructor(public authService: AuthService, private router: Router){
    console.group('server:' , this.authService);
  }

  canActivate(//cada que se entra
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean>  | boolean {
      console.log('canActivate: ', this.authService.auth);
      if(!this.authService.auth)
        this.router.navigate(["auth"]);
      return this.authService.auth;
  }

  // if(StorageHelper.getItem('session') === "")
      //   this.router.navigate(["auth"]);
      // return StorageHelper.getItem('session');

  canLoad(  //antes
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean>  | boolean {
      this.authService.showSession();
      console.log('canLoad: ', this.authService.auth);
      if(!this.authService.auth)
        this.router.navigate(["auth"]);
      return this.authService.auth;
  }
}
