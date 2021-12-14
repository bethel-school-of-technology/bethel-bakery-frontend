import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) { 
      return true;
    }

    this.router.navigate(['/no-access']);
    return false;
  
  }

  // checkLogin(): boolean {
  //   if (this.authService.isLoggedIn) { return true; }




    // Redirect to the login page
    // return this.router.parseUrl('/login');
  }

