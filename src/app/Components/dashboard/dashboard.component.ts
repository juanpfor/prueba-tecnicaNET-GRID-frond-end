import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private cookie : CookieService,
    private route : Router,
  ) { }

  ngOnInit(): void {
  }

  logout () {
    localStorage.clear()
    this.cookie.deleteAll()
    this.route.navigate(['/login']);
  }

}
