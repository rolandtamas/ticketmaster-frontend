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
}
interface Match {
  home: string,
  away: string,
  date: string
}
