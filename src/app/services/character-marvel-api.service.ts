import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as CryptoJS from 'crypto-js';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterMarvelAPIService {

  private publicKey : string = "3be519c4ef0ee0703bfc0b3e6d0400e1";
  private privateKey : string = "38524cd2efd3f23f9b9413356de49f12d190dc36";
  private urlCharacterNameStart : string = "https://gateway.marvel.com/v1/public/characters?nameStartsWith=";
  private urlCharacterAll : string = "https://gateway.marvel.com/v1/public/characters?";
  private urlCharacterFullName : string = "http://gateway.marvel.com/v1/public/characters?name=";
  private nameHero : string = "";
  private ts : string = "1";
  private hash : string = CryptoJS.MD5(this.ts+this.privateKey+this.publicKey).toString();
  
  

  constructor(private http: HttpClient){}


  getCharacterFullName(fullname: string): Observable<any>{
    this.nameHero = fullname;
    const ALL_URL:string = (this.urlCharacterFullName+fullname+"&ts="+this.ts+"&apikey="+this.publicKey+"&hash="+this.hash);
    
    return this.http.get<any>(ALL_URL)
    .pipe(map((data:any) => data.data.results));
  }

  getAllCharacterNameStart(nameStart: string): Observable<any>{
    this.nameHero = nameStart;
    const ALL_URL:string = (this.urlCharacterNameStart+nameStart+"&ts="+this.ts+"&apikey="+this.publicKey+"&hash="+this.hash);
    
    return this.http.get<any>(ALL_URL)
    .pipe(map((data:any) => data.data.results));
  }
  
  getAllCharacters(): Observable<any>{
    const ALL_URL:string = (this.urlCharacterAll+"&ts="+this.ts+"&apikey="+this.publicKey+"&hash="+this.hash);    
    return this.http.get<any>(ALL_URL)
    .pipe(map((data:any) => data.data.results));
  }


}
