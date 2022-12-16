import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsoleLogger } from '@aws-amplify/core';
import { Owner } from 'src/app/classes/Owner';
import { Property } from 'src/app/classes/Property';
import { CognitoService } from 'src/app/services/cognito.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  owner!: Owner;

  constructor(private router: Router, private service: CognitoService, private register: LoginService) { }

  ngOnInit(): void {
    var saveOwner = localStorage.getItem('saveOwner');

    this.service.getOwner()
    .then((user: any) => {
      if (user) {

        this.owner = {
          id: 0,
          name: user.attributes.name,
          birthday: user.attributes.birthdate,
          address: user.attributes.address,
          hashed_password: "não precisas de saber :)",
          email: user.attributes.email,
          cellphone: user.attributes.phone_number,
          contract_date: "",
          notification_type: "",
          buildings: [],
          cognito_id: user.username,
        };

        localStorage.setItem('cognito_id', this.owner.cognito_id)

        // enviar um post de um owner, caso este tenha acabado de dar sign in
        if (saveOwner == "true") {
          this.register.register(this.owner).subscribe((info) => {
            console.log("user guardado")
            localStorage.setItem('saveOwner', String(false))
          })
        }
      }
    });

  }

  properties : Property[] = [
    {id: 1, name:'My House'},
    {id: 2, name:'Bakery Rodriguez'},
  ];



}
