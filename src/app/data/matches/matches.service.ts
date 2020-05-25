import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {IMatch} from './match';
import { catchError, tap, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  apiUrl:string = 'https://localhost:5001/match';
  constructor(private httpclient: HttpClient) { }

  getData(): Observable<IMatch[]> {
    return this.httpclient.get<IMatch[]>(this.apiUrl).pipe(
      tap(data => console.log('All Matches ' + JSON.stringify(data))),
      catchError(this.handleError<IMatch[]>('getData', []))); 
  }
private handleError<T> (operation = 'operation', result?: T)
{
  return (error: any) : Observable<T> => {
    console.error(error);
    return of (result as T);
  }
  }
}
