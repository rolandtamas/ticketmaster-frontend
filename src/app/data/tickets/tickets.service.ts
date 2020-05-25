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
apiUrl:string = 'https://localhost:5001/ticket';
constructor(private http: HttpClient,
  private alertify: AlertifyService,
  private authService: AuthService
  ) { }
getData(username: string): Observable<ITicket[]> {
  var params = new HttpParams().set("username", username);
   var  headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.token}`);
  
  
  
  return this.http.get<ITicket[]>(this.apiUrl+'/byUsername', {headers:headers, params: params}).pipe(
    tap(data => console.log('All Tickets of the current user: ' + JSON.stringify(data))),
    catchError(this.handleError<ITicket[]>('getData', [])));
    
}

cancelBoughtTicket(ticketId:string)
    {
      var emptyObject : any = {};
        var params = new HttpParams().set('username', this.authService.decodedToken.unique_name)
        .set('ticketId', ticketId);
        var headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.token}`)
        .set('Content-Length', '0');
        return this.http.put(this.apiUrl+'/cancel', emptyObject, {headers:headers, params:params});
        
    }


private handleError<T> (operation = 'operation', result?: T)
{
return (error: any) : Observable<T> => {
  console.error(error);
  
  return of (result as T);
}
}

}
