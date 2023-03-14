import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../service/department.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  title = 'departments';
  departments: any;

  constructor(private department: DepartmentService) {}

  ngOnInit(): void {
    this.department.getDepartments().subscribe((data: any) => {
      console.log(data);
      this.departments = data;
    });
  }
}
