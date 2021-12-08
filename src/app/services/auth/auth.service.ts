import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/models/auth-response';
import { Credentials } from 'src/app/models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:8080/authenticate";

  constructor(private http: HttpClient) { }

  logIn(credentials: Credentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.url, credentials);
  }

  logOut(){
    localStorage.removeItem('token');  
  }
}
