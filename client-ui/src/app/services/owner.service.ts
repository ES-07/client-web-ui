import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Owner } from '../classes/Owner';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  
    constructor(private http: HttpClient) {}
  
    getOwnerByID(id: string) : Observable<Owner> {
        return this.http.get<Owner>(environment.SITES_API + "/owners/"+ id);
    }

}