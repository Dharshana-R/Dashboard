import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
('@angular/common/http');
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddstudService {
  addstudentS: any;

  private apiUrl = 'http://localhost:4000/api/student/addStudent';

  constructor(private http: HttpClient) {}

  addstudent(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    console.log(data);

    return this.http.post(this.apiUrl, data, { headers });
  }
}
