import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './department/department.component';
import { FeesComponent } from './fees/fees.component';
import { AddstudComponent } from './addstud/addstud.component';

import { FormsModule } from '@angular/forms';
import { DltstudComponent } from './dltstud/dltstud.component';

//Routing

// import { RouterModule, Routes } from '@angular/router';
// const Routes: Routes = [
//   {
//     path: 'student',
//     component: StudentComponent,
//   },
// ];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DepartmentComponent,
    FeesComponent,
    AddstudComponent,
    DltstudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(Routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
