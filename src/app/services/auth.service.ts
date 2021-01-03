import { Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: any) {
    return this.http.post("http://localhost:8080/authenticate", credentials).map(Response => {
      let result: any = Response;
      if (result && result.id) {
        localStorage.setItem('jwt', result.jwt);
        console.log(Response)
        return true;
      }
      return false;
    });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/']);
  }

  // isLogedIn() {
  //   let jwtHelper = new JwtHelperService();
  //   let jwt: any = localStorage.getItem('jwt');
  //   if (!jwt)
  //     return false;
  //   let isExpired = jwtHelper.isTokenExpired(jwt);
  //   return !isExpired;
  // }

  // get currentUser() {
  //   let token = localStorage.getItem('jwt');
  //   if (token) {
  //     return new JwtHelperService().decodeToken(token);
  //   } else {
  //     return null;
  //   }

  // }
}
