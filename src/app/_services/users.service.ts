import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IUser } from '../data/users/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl:string = 'https://localhost:5001/user/';
  
  constructor(private httpclient: HttpClient) { }

  getData(username: string): Observable<IUser> {
    var params = new HttpParams().set('username', username);
    var  headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.token}`);
   
   
   
    return this.httpclient.get<IUser>(this.apiUrl + "byUsername", {headers: headers, params:params}).pipe(
      tap(/* Print to console log*/));
  }
private handleError<T> (operation = 'operation', result?: T)
{
  return (error: any): Observable<T> => {
    console.error(error);
    return of (result as T);
  }
  }

 updateData(model : any, username: string){
   model.username= username;
  var params = new HttpParams().set('model', model);
  var  headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.token}`);
 
   return this.httpclient.put(this.apiUrl, model, {headers: headers, params: params});

 } 
}
