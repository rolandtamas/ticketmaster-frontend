import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  apiUrl:string = "https://localhost:44384/match"
  constructor(private httpclient: HttpClient) { }
  getData(): Observable<any> {
    return this.httpclient.get(this.apiUrl);
  }
  putData(amount: number): Observable<any> {
    return this.httpclient.put(this.apiUrl, amount);
  }
  
}
interface Match {
  id:string,
  home: string,
  away: string,
  date: string,
  ticketCount:number
}
