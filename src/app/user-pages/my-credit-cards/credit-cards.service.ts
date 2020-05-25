import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { tap, catchError } from 'rxjs/operators';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthService } from 'src/app/_services/auth.service';
import { ICreditCard } from 'src/app/data/credit-cards/credit-card';



@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {
apiUrl:string = 'https://localhost:5001/creditcard';
constructor(private http: HttpClient,
  private alertify: AlertifyService,
  private authService: AuthService
  ) { }
getData(username: string): Observable<ICreditCard[]> {
  var params = new HttpParams().set('username', username);
   var  headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.token}`);
  
  
  
  return this.http.get<ICreditCard[]>(this.apiUrl+"/byUsername", {headers:headers, params: params}).pipe(
    tap(data => console.log('Credit cards of current user: '+ JSON.stringify(data))),
    catchError(this.handleError<ICreditCard[]>('getData', [])));
    
}
private handleError<T> (operation = 'operation', result?: T)
{
return (error: any) : Observable<T> => {
  this.alertify.error(error);
  
  return of (result as T);
}
}

remove(creditCardId:string)
    {
        var params = new HttpParams().set('username', this.authService.decodedToken.unique_name)
        .set('creditCardId', creditCardId);
        var headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.token}`);
        return this.http.delete(this.apiUrl, {headers:headers, params:params});
        
    }
add(creditCard:any)
{
  var params = new HttpParams().set('username', this.authService.decodedToken.unique_name);
  var headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.token}`);

  return this.http.post(this.apiUrl, creditCard, {headers:headers, params:params });


}

}
