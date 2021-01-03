import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-head',
  templateUrl: './dashboard-head.component.html',
  styleUrls: ['./dashboard-head.component.css']
})
export class DashboardHeadComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
