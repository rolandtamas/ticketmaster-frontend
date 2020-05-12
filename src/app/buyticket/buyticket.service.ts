import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuyticketService {
  apiUrl: string = "https://localhost:44384/tickets";

  constructor(private httpclient: HttpClient) { }
  postData(ticket: BoughtTicket): Observable<any> {
    return this.httpclient.post(this.apiUrl, ticket);
  }
}

interface BoughtTicket {
  id: string,
  home: string,
  away: string,
  date: string,
  firstname: string,
  lastname: string,
  email: string,
  sector: string,
  row: number,
  amount: number,
  seats: number[],
}
