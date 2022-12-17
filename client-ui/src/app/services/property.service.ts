import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Property } from '../classes/Property';

@Injectable({
    providedIn: 'root'
  })

export class PropertyService {
    
    constructor(private http: HttpClient) {}

    getAllProperties() : Observable<Property[]> {
        return this.http.get<Property[]>(environment.SITES_API + "/buildings");
    }
    
}