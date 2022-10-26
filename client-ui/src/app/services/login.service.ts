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

    return this.http.post(environment.SITES_API + "/login", json)
  }

  
  register(owner: Owner) {
    let params = new HttpParams();
    /* params = params.append('product', product_id);
    params = params.append('amount', amount); */
    return this.http.post(environment.SITES_API + "/owners",  {}, { params });
  }

}