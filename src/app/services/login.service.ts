import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseUrl: string;
  
  constructor(private http: HttpClient, private global:GlobalService) {
    this.baseUrl=this.global.getbaseurl()
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login/authenticate`, data);
  }
}
