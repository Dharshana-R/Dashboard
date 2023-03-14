import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DepartmentComponent } from './department/department.component';
import { FeesComponent } from './fees/fees.component';
import { AddstudComponent } from './addstud/addstud.component';
import { DltstudComponent } from './dltstud/dltstud.component';

const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
  },
  {
    path: 'department',
    component: DepartmentComponent,
  },
  {
    path: 'fees',
    component: FeesComponent,
  },
  {
    path: 'addstud',
    component: AddstudComponent,
  },
  {
    path: 'dltstud',
    component: DltstudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
