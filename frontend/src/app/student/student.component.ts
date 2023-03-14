import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  title = 'students';
  students: any;
  http: any;

  constructor(private student: StudentService) {}

  ngOnInit(): void {
    this.student.getStudent().subscribe((data: any) => {
      console.log(data);
      this.students = data;
    });
  }
}
