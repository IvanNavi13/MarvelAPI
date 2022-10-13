import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { ApiEndpoints } from '../utils/api.endpoints';

@Injectable({
  providedIn: 'root'
})
export class CharacterMarvelAPIService {

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Object> {
    return this.http.get<any>(environment.MARVEL_URL + ApiEndpoints.AllCHARACTERS).pipe(
      map((response: any) => response.data.results));
  }

  getCharacterFullName(full_name: string): Observable<Object> {
    return this.http.get<any>(environment.MARVEL_URL + ApiEndpoints.getCharactersByFullName(full_name)).pipe(
      map((response: any) => response.data.results));
  }

  getAllCharacterNameStart(nameStart: string): Observable<Object> {
    return this.http.get<any>(environment.MARVEL_URL + ApiEndpoints.getCharactersByStartName(nameStart)).pipe(
      map((response: any) => response.data.results));
  }

  getAllComics(): Observable<Object> {
    console.log(environment.MARVEL_URL + ApiEndpoints.AllCOMICS)
    return this.http.get<any>(environment.MARVEL_URL + ApiEndpoints.AllCOMICS).pipe(
      map((response: any) => response.data.results));
  }

  getComicsFullTitle(nameTitle: string): Observable<Object> {
    return this.http.get<any>(environment.MARVEL_URL + ApiEndpoints.getComicsByFullTitle(nameTitle)).pipe(
      map((response: any) => response.data.results));
  }

  getComicsByFormatType(formatType: string): Observable<Object> {
    return this.http.get<any>(environment.MARVEL_URL + ApiEndpoints.getComicsByFormatType(formatType)).pipe(
      map((response: any) => response.data.results));
  }


}
