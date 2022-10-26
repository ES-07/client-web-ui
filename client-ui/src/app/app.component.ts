import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-ui';
  logged_in!: boolean;

  constructor(private router: Router) {
    this.logged_in = (localStorage.getItem("logged_in") == "true");
  }

  ngOnInit(): void {
    this.logged_in = (localStorage.getItem("logged_in") == "true");
  }
}
