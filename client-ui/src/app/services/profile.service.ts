import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../classes/Owner';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService{
  
  constructor(private http: HttpClient) { }

  getOwnerData(id: string)  : Observable<Owner> {
    return this.http.get<Owner>(environment.SITES_API +'/owners/cognito/'+ id);
  }
  
}
