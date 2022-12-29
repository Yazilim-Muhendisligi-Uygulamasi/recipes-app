import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from '.././_services/token-storage.service'

const AUTH_API = 'http://localhost:8080/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
console.log(httpOptions);

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  changePasswordUrl = "http://localhost:8081/reset-password";
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
  requestResetPasswordLink(email:string):Observable<any> {
    return this.http.put(AUTH_API +'forgot-password', {
      email,
    }, httpOptions);
  }
}
