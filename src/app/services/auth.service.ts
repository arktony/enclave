import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
  
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: any) {
    return this.http.post("http://localhost:8080/authenticate", credentials).map(Response => {
      let result: any = Response;
      if (result && result.jwt) {
        localStorage.setItem('jwt', result.jwt);
        return true;
      }
      return false;
    });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }

  isLogedIn() {
    let jwtHelper = new JwtHelperService();
    let jwt: any = localStorage.getItem('jwt');
    if (!jwt)
      return false;
    let isExpired = jwtHelper.isTokenExpired(jwt);
    return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('jwt');
    if (token) {
      return new JwtHelperService().decodeToken(token);
    } else {
      return null;
    }
  }
}
