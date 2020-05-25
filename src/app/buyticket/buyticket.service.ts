import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IBoughtTicket } from './bought-ticket';
import { AuthService } from '../_services/auth.service';
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823

@Injectable({
  providedIn: 'root'
})
export class BuyticketService {
<<<<<<< HEAD
  apiUrl: string = 'https://localhost:5001/ticket';
  data : any ={};

  constructor(private httpclient: HttpClient,
              private authService: AuthService) { }
  putData(ticket: IBoughtTicket) {
    var params = new HttpParams().set("username", this.authService.decodedToken.unique_name);
    var  headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.token}`);
    


    return this.httpclient.put(this.apiUrl + '/buy', ticket, {headers:headers, params:params});
=======
  apiUrl: string = "https://localhost:44384/tickets";

  constructor(private httpclient: HttpClient) { }
  postData(ticket: BoughtTicket): Observable<any> {
    return this.httpclient.post(this.apiUrl, ticket);
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823
  }
  
}

<<<<<<< HEAD
=======
interface BoughtTicket {
  matchid: string,
  home: string,
  away: string,
  date: string,
  firstname: string,
  lastname: string,
  email: string,
  sector: string,
  row: string,
  amount: number,
}
>>>>>>> dcd8cd82814da2fab3b4e8f73adbb022b44bc823
