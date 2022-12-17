import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Owner } from '../classes/Owner';
import { Observable } from 'rxjs';
import { Property } from '../classes/Property';

@Injectable({
  providedIn: 'root',
})
export class OwnerService {
  
    constructor(private http: HttpClient) {}
  
    getOwnerByID(id: string) : Observable<Owner> {
        return this.http.get<Owner>(environment.SITES_API + "/owners/cognito/"+ id);
    }

    getPropertiesByOwnerID(id: string) : Observable<Property[]> {
        return this.http.get<Property[]>(environment.SITES_API + "/buildings/cognito/"+ id);
    }

  updateOwner(id: number, owner: Owner): Observable<Owner> {
    console.log('here');
    return this.http.put<Owner>(
      environment.SITES_API + '/owners/' + id,
      owner,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
}
