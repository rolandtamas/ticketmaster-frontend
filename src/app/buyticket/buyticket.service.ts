import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { IBoughtTicket } from './bought-ticket';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BuyticketService {
  apiUrl: string = 'https://localhost:5001/ticket';
  data : any ={};

  constructor(private httpclient: HttpClient,
              private authService: AuthService) { }
  putData(ticket: IBoughtTicket) {
    var params = new HttpParams().set("username", this.authService.decodedToken.unique_name);
    var  headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.token}`);
    


    return this.httpclient.put(this.apiUrl + '/buy', ticket, {headers:headers, params:params});
  }
  
}

