import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as CryptoJS from 'crypto-js';

import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<any> {



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }
}
