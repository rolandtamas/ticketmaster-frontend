import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ITicket } from './ticket';
import { tap, catchError } from 'rxjs/operators';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class TicketsService {
apiUrl:string = 'https://localhost:5001/ticket/byUsername';
constructor(private http: HttpClient,
  private alertify: AlertifyService,
  private authService: AuthService
  ) { }
getData(username: string): Observable<ITicket[]> {
  var params = new HttpParams().set("username", username);
   var  headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.token}`);
  
  
  
  return this.http.get<ITicket[]>(this.apiUrl, {headers:headers, params: params}).pipe(
    tap(data => console.log('All Tickets of the current user: ' + JSON.stringify(data))),
    catchError(this.handleError<ITicket[]>('getData', [])));
    
}
private handleError<T> (operation = 'operation', result?: T)
{
return (error: any) : Observable<T> => {
  console.error(error);
  
  return of (result as T);
}
}

}
