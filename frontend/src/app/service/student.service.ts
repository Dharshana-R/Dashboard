import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  dltUrl: any;
  // deleteStudent(_id: any) {
  //   throw new Error('Method not implemented.');
  // }
  delete(arg0: string) {
    throw new Error('Method not implemented.');
  }
  student: any;
  constructor(private http: HttpClient) {}

  getStudent() {
    let url = 'http://localhost:4000/api/student/getstuds';
    return this.http.get(url);
  }
}
