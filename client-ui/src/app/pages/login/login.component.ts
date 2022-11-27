import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from 'src/app/classes/Owner';
import { CognitoService } from 'src/app/services/cognito.service';
import { LoginService } from 'src/app/services/login.service';

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
  alertMessage: string = '';
  code_validation: boolean = false;
  owner! : Owner;

  constructor(private router: Router, private service: CognitoService, private register: LoginService) { }

  ngOnInit(): void {
  }

  signUp() {
    this.sign_in = !this.sign_in
    this.login_failed = false
    this.no_match_pass = false
    this.blank_space = false
    this.alertMessage = ""
  }

  signInWithCognito() {

    let email = (<HTMLInputElement>document.getElementById("email")).value
    let password = (<HTMLInputElement>document.getElementById("password")).value

    if (email == "" || password == "") {
      this.login_failed = true
      this.displayAlert("Please, enter your credentials")
      return

    } else {
      this.login_failed = false
    }

    this.service.signIn(email, password)
    .then(() => {
      console.log("bem vindo")
      localStorage.setItem('saveOwner', String(false));
      this.router.navigate(['/']);
      window.location.href= "/"
    })
    .catch((error: any) => {
      console.log(error.message)
      this.displayAlert(error.message);
    })
  
  }


  signUpWithCognito() {
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
        this.displayAlert("Passwords doesn't match, try again")
        return
  
      } else {
        this.no_match_pass = false
      }

      this.owner = {
        id: 0,
        name: name,
        birthday: birthday,
        address: address,
        hashed_password: password,
        email: email,
        cellphone: cellphone,
        contract_date: "",
        notification_type: "",
        buildings: [],
        cognito_id: "",
      };


      this.service.signUp(this.owner)
      .then(() => {
        console.log("só falta validar")
        this.code_validation = true
      })
      .catch((error: any) => {
        this.displayAlert(error.message);
      })
      

    } else {
      this.displayAlert("Missing required information")
    }

  }

  public confirmSignUp(): void {
    let code = (<HTMLInputElement>document.getElementById("code")).value
    this.service.confirmSignUp(this.owner, code)
    .then(() => {

      this.service.signIn(this.owner.email, this.owner.hashed_password)
      .then(() => {
        console.log("bem vindo")
        localStorage.setItem('saveOwner', String(true));
        this.router.navigate(['/']);
        window.location.href= "/"
      })
      .catch((error: any) => {
        console.log(error.message)
        this.displayAlert(error.message);
      })


    }).catch((error: any) => {
      console.log("ERRO", error)
    });
  }


  private displayAlert(message: string) {
    this.alertMessage = message;
  }
}
