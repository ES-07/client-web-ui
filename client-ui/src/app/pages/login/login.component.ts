import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sign_in = true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    localStorage.setItem("logged_in","true");
    window.location.href = "/"
  }

  signUp() {
    this.sign_in = !this.sign_in
  }
}
