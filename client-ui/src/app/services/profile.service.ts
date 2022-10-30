import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../classes/Owner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService{
  
  private BASE_URL = 'http://localhost:8002/owners';

  constructor(private http: HttpClient) { }

  getOwnerData(){
    console.log("no servico")
    return this.http.get<Owner>(this.BASE_URL+'/'+'20',{ 
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  
}
