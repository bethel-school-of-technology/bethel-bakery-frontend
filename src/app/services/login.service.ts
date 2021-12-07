import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer';
import { User } from '../models/user/user';
import { AuthResponse } from '../models/auth-response';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://localhost:8080/authenticate"
  constructor(private http: HttpClient) {}

  logIn(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
}
