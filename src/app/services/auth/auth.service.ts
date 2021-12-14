import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthResponse } from 'src/app/models/auth-response';
import { Credentials } from 'src/app/models/credentials';
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenPayload } from 'src/app/models/tokenPayload';
import { tap, delay } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:8080/authenticate";


  // isLoggedin = false;

   // store the URL so we can redirect after logging in
   redirectUrl: string | null = null;

  constructor(private http: HttpClient) { }

  logIn(credentials: Credentials): Observable<AuthResponse> {
    console.log(credentials);
    return this.http.post<AuthResponse>(this.url, credentials);
  }

  logOut(){
    localStorage.removeItem('token');  
  }

  isLoggedIn():boolean {
    
    let jwtHelper = new JwtHelperService(); 
    let token = localStorage.getItem('token');

    if(!token) {
      return false;
    }

    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    let tokenPayload: any;

    if (!token){
      return null;
    }

    let jwtHelper = new JwtHelperService();
    tokenPayload = jwtHelper.decodeToken(token);

    return  jwtHelper.decodeToken(token);
  }

  isAdmin(): boolean {
    if(this.currentUser.role[0].authority === "ROLE_Admin"){
      return true;
    }else {
      return false;
    }
  }

  // login(): Observable<boolean> {
  //   return of(true).pipe(
  //     delay(1000),
  //     tap(() => this.isLoggedin = true)
  //   );
  // }

  // logout(): void {
  //   this.isLoggedin = false;
  // }


}
