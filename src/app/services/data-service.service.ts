import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  });
  constructor(private http: HttpClient) {}

  getWithUrl(url: string): Observable<any> {
    return this.http.get(url);
  }
  postData(url: string, attr: any) {
    return this.http.post(url, attr, { headers: this.headers });
  }
}
