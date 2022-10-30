import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Owner } from 'src/app/classes/Owner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sign_in = true
  login_failed = false
  no_match_pass = false
  blank_space = false

  constructor(private router: Router, private service: LoginService) { }

  ngOnInit(): void {
    localStorage.setItem("logged_in","false");
  }

  signUp() {
    this.sign_in = !this.sign_in
    this.login_failed = false
    this.no_match_pass = false
    this.blank_space = false
  }

  logIn() {

    let email = (<HTMLInputElement>document.getElementById("email")).value
    let password = (<HTMLInputElement>document.getElementById("password")).value

    if (email == "" || password == "") {
      this.login_failed = true
      return

    } else {
      this.login_failed = false
    }

    this.service.logIn(email, password).subscribe({
      next: (info: any) => {
        console.log("sucesso", info)
        // localStorage.setItem('token', info["token"]);

        if (info[0] == 200) {
          localStorage.setItem("logged_in","true");
          console.log(info[1])
          // window.location.href = "/"
          

        } else  if (info == 401) {
          this.login_failed = true
        }

      }, 
      error: (error) => {
        console.log("[ERROR]", error);
      } 
    });
   
  }


  register() {
    let name = (<HTMLInputElement>document.getElementById("name")).value
    let email = (<HTMLInputElement>document.getElementById("email")).value
    let address = (<HTMLInputElement>document.getElementById("address")).value
    let cellphone = (<HTMLInputElement>document.getElementById("cellphone")).value
    let birthday = (<HTMLInputElement>document.getElementById("birthday")).value
    let password = (<HTMLInputElement>document.getElementById("password")).value
    let password_again = (<HTMLInputElement>document.getElementById("password_again")).value

    if (name && email && address && cellphone && birthday && password && password_again) {
      this.blank_space = false

      if (password != password_again) {
        this.no_match_pass = true
        return
  
      } else {
        this.no_match_pass = false
      }

      const owner: Owner = {
        id: 0,
        name: name,
        birthday: birthday,
        address: address,
        email: email,
        hashed_password: password,
        cellphone: cellphone,
        contract_date: "",
        notification_type: "",
        buildings: [],
      };

      this.service.register(owner).subscribe((info: any) => {
        console.log(info)
      });

    } else {
      this.blank_space = true
    }

  }
}
