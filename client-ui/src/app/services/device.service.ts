import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Device } from '../classes/Device';

@Injectable({
    providedIn: 'root'
  })

export class DeviceService {
    constructor(private http: HttpClient) {}

    getAllDevices() : Observable<Device[]> {
        return this.http.get<Device[]>(environment.SITES_API + "/devices");
    }

    getDevicesByBuildingID(id: number) : Observable<Device[]> {
        return this.http.get<Device[]>(environment.SITES_API + "/devices/building/"+ id);
    }

}