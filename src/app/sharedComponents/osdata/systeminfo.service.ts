import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SysteminfoService {
  readonly rootUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getSystemInfo(): Observable<any>{

    return this.http.get<any>(this.rootUrl + '/systeminfo');
  }

  getOSInfo(): Observable<any>{

    return this.http.get<any>(this.rootUrl + '/osinfo');
  }
}
