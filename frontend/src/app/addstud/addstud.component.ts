import { Component, OnInit } from '@angular/core';
import { AddstudService } from '../service/addstud.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css'],
})
export class AddstudComponent {
  title = 'addstudent';
  formData: any = {};
  addStud: any = {};

  // reg: String = '';
  // fname: String = '';
  // lname: String = '';
  // dob: Number | undefined;
  // gender: String = '';
  // contact: Number | undefined;

  constructor(private addstud: AddstudService) {}

  onSubmit() {
    console.log(this.formData);
    this.addstud.addstudent(this.formData).subscribe((response: any) => {
      console.log(response);
    });
    alert('Student Registered Successfully');
  }
}
