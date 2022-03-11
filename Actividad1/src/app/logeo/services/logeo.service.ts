import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogeoService {

  apiURL=environment.apiURL;
  constructor(private http:HttpClient) { }


  registro(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}users`,user);
  }

  login(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}login`,user);
  }
}
