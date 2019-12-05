import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  readonly rootUrl = sessionStorage.getItem('sessionUrl');;
  
  constructor(private http: HttpClient) { }

  getDeviceList(): Observable<any>{

    return this.http.get<any>(this.rootUrl + '/devices');
  }
}
