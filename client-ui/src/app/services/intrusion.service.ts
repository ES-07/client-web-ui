import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Intrusion } from '../classes/Intrusion';

@Injectable({
    providedIn: 'root'
  })

export class IntrusionService {
    constructor(private http: HttpClient) {}

    getAllIntrusions() : Observable<Intrusion[]> {
        return this.http.get<Intrusion[]>(environment.SITES_API + "/intrusions");
    }

    getIntrusionsByOwnerID(id: number) : Observable<Intrusion[]> {
        return this.http.get<Intrusion[]>(environment.SITES_API + "/intrusions/owner/"+ id);
    }

}