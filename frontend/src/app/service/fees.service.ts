import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FeesService {
  constructor(private http: HttpClient) {}

  getFees() {
    let url = 'http://localhost:4000/api/fees/getfees';
    return this.http.get(url);
  }
}
