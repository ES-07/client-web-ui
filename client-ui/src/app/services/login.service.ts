import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Owner } from '../classes/Owner';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http: HttpClient) {}

  logIn(email: string, password: string) {
    let str = '{"email": "'+ email +'", "password": "'+ password +'"}';
    let json = JSON.parse(str);

    return this.http.post(environment.SITES_API + "/owners/login", json)
  }

  
  register(owner: Owner) {
    let str = '{"name": "'+ owner.name +'", "email": "'+ owner.email +'", "birthday": "'+ owner.birthday +'", "address": "'+ owner.address +'", "hashed_password": "'+ owner.hashed_password +'", "cellphone": "'+ owner.cellphone +'"}';
    let json = JSON.parse(str);

    return this.http.post(environment.SITES_API + "/owners", json);
  }

}