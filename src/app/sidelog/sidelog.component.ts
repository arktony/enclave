import { User } from './../user';
import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sidelog',
  templateUrl: './sidelog.component.html',
  styleUrls: ['./sidelog.component.css']
})
export class SidelogComponent implements OnInit {
  user = new User();

  constructor(private _service : RegistrationService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._service.loginUserRemote(this.user).subscribe(
      data => console.log("Response recieved"),
      error => console.log("Exception occured")
      
    );
  };

}
