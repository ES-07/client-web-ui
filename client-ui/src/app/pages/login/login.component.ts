import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sign_in = true

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
    localStorage.setItem("logged_in","false");
  }

  redirect(){
    localStorage.setItem("logged_in","true");
    window.location.href = "/"
  }

  signUp() {
    this.sign_in = !this.sign_in
  }

  logIn() {

    let email = (<HTMLInputElement>document.getElementById("email")).value
    let password = (<HTMLInputElement>document.getElementById("password")).value

    this.service.logIn(email, password).subscribe({
      next: (info: any) => {
        console.log("sucesso", info)
        /* localStorage.setItem('token', info["token"]); */

      }, 
      error: (error) => {
        console.log("[ERROR]", error);
      }
    });

  }
}
