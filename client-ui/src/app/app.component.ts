import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client-ui';
  logged_in = (localStorage.getItem("logged_in") == "true");

  constructor(private router: Router) {
    console.log(this.logged_in)
    localStorage.setItem("logged_in","false");
  }

  ngOnInit(): void {
    localStorage.setItem("logged_in","false");
  }
}
