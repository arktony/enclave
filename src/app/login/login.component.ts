import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean | undefined;


  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  signIn(credentials: any) {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result !== null)
          this.router.navigate(['/dashboard']);
        else
          this.invalidLogin = true;
      });
  };

}
