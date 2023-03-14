import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  getDepartments() {
    let url = 'http://localhost:4000/api/department/getdepts';
    return this.http.get(url);
  }
}
