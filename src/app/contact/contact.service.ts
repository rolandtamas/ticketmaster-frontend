import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  apiUrl: string = 'https://localhost:44384/contact';

  constructor(private httpclient:HttpClient) { 
    
  }

  postData(formobject:ContactForm): Observable<any>{
    return this.httpclient.post(this.apiUrl,formobject);
  }
}
interface ContactForm {
  name: string,
  email: string,
  message: string
}
